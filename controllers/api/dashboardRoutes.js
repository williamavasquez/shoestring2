const router = require('express').Router();
const { Bills, User } = require('../../models');

router.post('/bills', (req, res) => {
    req.body.user_id = req.session.user_id
    console.log(req.body)
    Bills.create(req.body);
    res.redirect('/')

        .then((newBill) => {
            res.json(newBill);
        })
        .catch((err) => res.json(err));
});

// router.put('/accounts', (req, res) => {


//     Accounts.update()
//     .then((data) => {
//         res.json(data);
//     })
//     .catch((err) => res.json(err));

// });

router.delete('/bills', (req, res) => {
    Bills.destroy({
        where: {
            id: req.body.id,
        },
    })
        .then((deletedBills) => {
            res.json(deletedBills);
        })
        .catch((err) => res.json(err));
});

// router.delete('/debt', (req, res) => {
//     Debt.destroy({
//         where: {
//             name: req.body,
//         },
//     })
//         .then((deletedDebt) => {
//             res.json(deletedDebt);
//         })
//         .catch((err) => res.json(err));
// });


//////PUTS///////
router.put('/account', (req, res) => {
    if(req.body.name === 'checking'){
        User.update({
            checking: req.body.amount,
        },
            {
                where: {
                    id: req.session.user_id,
                }
            }).then((accountUpdate) => res.json(accountUpdate))

    } else if (req.body.name === 'savings'){
        User.update({
            savings: req.body.amount,
        },
            {
                where: {
                    id: req.session.user_id,
                }
            }).then((accountUpdate) => res.json(accountUpdate))
    } else if (req.body.name == 'credit card'){
        User.update({
            credit_card: req.body.amount,
        },
            {
                where: {
                    id: req.session.user_id,
                }
            }).then((accountUpdate) => res.json(accountUpdate))
    } else {
        console.log("error updating accounts")
    }

});

router.put('/savings-account', (req, res) => {
    Accounts.update({
        amount: req.body.amount,
    },
        {
            where: {
                user_id: req.session.user_id,
                accounts_name: req.body.name
            }
        }).then((accountUpdate) => res.json(accountUpdate))

});

router.put('/cards', (req, res) => {
    Cards.update({
        name: req.body.name,
        amount: req.body.amount,
        due_date: req.body.due_date,
    },
        {
            where: {
                cards_id: 1
            }
        }).then((cardUpdate) => res.json(cardUpdate))

});

router.put('/payday', (req, res) => {
    User.update({
        payday: req.body.payday,
    },
        {
            where: {
                user_id: req.session.user_id
            }
        }).then((paydayUpdate) => res.json(paydayUpdate))

});

router.put('/income', (req, res) => {
    User.update({
        income: req.body.income,
    },
        {
            where: {
                user_id: req.session.user_id
            }
        }).then((incomeUpdate) => res.json(incomeUpdate))

});

module.exports = router 