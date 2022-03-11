const { User, Profile, Post, Sequelize } = require('../models')
const t = require('../helpers/transaction');
const create = async (req, res, next) => {
    try {
        const { data } = req.body;
        // create transaction
        const transaction = await t.create();
        if (!transaction.status && transaction.error) {
            throw transaction.error;
        }
        const createUser= await User.bulkCreate(data, { transaction: transaction.data });
        if (!createUser) {
            // rollback transaction
            await t.rollback(transaction.data);
            res.status(400).send({
                status: 'error',
                message: 'User failed created'
            });
        }
        // commit transaction
        const commit = await t.commit(transaction.data);
        if (!commit.status && commit.error) {
            throw commit.error;
        }

        res.status(201).send({
            status: 'success',
            data: createUser
        });
    } catch (error) {
        next(error);
    }
}

const findById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const findUserById = await User.findByPk(id, {
            include: [
                {
                    model: Profile,
                },
                {
                    model: Post,
                }

            ],
        });
        if (!findUserById) {
            res.status(404).send({
                status: 'error',
                message: `User with id ${id} not found`
            });
        }
        res.status(200).send({
            status: 'success',
            data: findUserById
        });

    } catch (error) {
        next(error);
    }
}

const update = async (req, res, next) => {
    try {
        const { id } = req.params;
        // create transaction
        const transaction = await t.create();
        if (!transaction.status && transaction.error) {
            throw transaction.error;
        }
        const { username, email, phoneNo,location } = req.body;
        const findUserById = await User.findOne({
            where: {
                id
            },
            transaction: transaction.data
        });
        if (!findUserById) {
            // rollback transaction
            await t.rollback(transaction.data);
            res.status(404).send({
                status: 'error',
                message: `User with id ${id} not found`
            });
        }
        if (username) findUserById.username = username;
        if (email) findUserById.email = email;
        if (phoneNo) findUserById.phoneNo = phoneNo;
        if(location)findUSerById.location=location
        const updateUser = await findUserById.save({ transaction: transaction.data });
        if (!updateUser) {
            // rollback transaction
            await t.rollback(transaction.data);
            res.status(400).send({
                status: 'error',
                message: `data User with id ${id} failed update`
            });
        }
        // commit transaction
        const commit = await help.commit(transaction.data);
        if (!commit.status && commit.error) {
            throw commit.error;
        }
        res.status(200).send({
            status: 'success',
            data: updateUser
        });

    } catch (error) {
        next(error);
    }
}
const destroy = async (req, res, next) => {
    try {
        const { id } = req.params;
        // create transaction
        const transaction = await t.create();
        if (!transaction.status && transaction.error) {
            throw transaction.error;
        }
        const findUserById = await User.findByPk(id, { transaction: transaction.data });
        if (!findUserById) {
            // rollback transaction
            await help.rollback(transaction.data);
            res.status(404).send({
                status: 'error',
                message: `User with id ${id} not found`
            })
        }
        const deleteUser = await findUserById.destroy({ transaction: transaction.data });
        if (!deleteUser) {
            // rollback transaction
            await t.rollback(transaction.data);
            res.status(503).send({
                status: 'error',
                message: `User with id ${id} failed delete`
            });
        }
        // commit transaction
        const commit = await help.commit(transaction.data);
        if (!commit.status && commit.error) {
            throw commit.error;
        }
        res.status(200).send({
            status: 'success',
            message: `User with id ${id} deleted`
        });
    } catch (error) {
        next(error);
    }
}
module.exports = {
    create,
    findById,
    update,
    destroy,
}