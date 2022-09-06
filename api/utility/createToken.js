import jwt from 'jsonwebtoken';



// create jwt token
export const createToken = (data, expire = '7d') => {

    return jwt.sign(data, process.env.JWT_SECRET, {

        expiresIn : expire
    });

}