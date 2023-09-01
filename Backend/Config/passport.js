// lets import modules
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('User');

// configure the local strategy for passport
passport.use(
    new LocalStrategy(
        {
            usernameField: 'email',
        },
        async (email, password, done) => {
            try {
                // Find user with provided email in database
                const user = await User.findOne({ email });

                // if user not found or passport is incorrect , return an error
                if (!user || !user.isValidPassword(password)) {
                    return done(null, false, { messsage: 'Incorrect email or password'});
                }

                // if everything is okay eturn the user object
                return done(null, user);
            } catch (error) {
                return done(error);
            }
        }
    )
);

// lets serialize and deserialize user for session management 
passport.serializeUser((user, done) => {
    done(null, user,id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.FindById();
        done(null, user)
    } catch (error) {
        done(error);
    }
});