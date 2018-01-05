module.exports = {
	'facebookAuth' : {
		'clientID': '1779135328825253',
		'clientSecret': '889862e9cfb0bb7dd9fe33752baa176d',
		'callbackURL': 'http://localhost:5000/auth/facebook/callback',
		  'profileFields': ['id', 'emails','photos', 'name'] 
	},

	'googleAuth' : {
		'clientID': '209448300130-dvm342tlpktqi1bpsht3a93feg2fta5b.apps.googleusercontent.com',
		'clientSecret': 'o_zIL2wgo7qPHMUpLFSKNleE',
		'callbackURL': 'http://localhost:5000/auth/google/callback'
	},
	secret: 'anirniscyak',
    urlDb: 'mongodb://localhost:27017/anirni-api'
}