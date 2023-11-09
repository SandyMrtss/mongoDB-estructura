
db.createCollection( 'users', {validator: {$jsonSchema: {bsonType: 'object',title:'users',required: [         'email',          'password',          'username',          'dob',          'gender',          'country',          'postal_code',          'type_user'],properties: {email: {bsonType: 'string'},password: {bsonType: 'string'},username: {bsonType: 'string'},dob: {bsonType: 'date'},gender: {enum: ['M','F','O']},follows_artists: {bsonType: 'array',items: {bsonType: 'objectId'}},country: {bsonType: 'string'},postal_code: {bsonType: 'int'},type_user: {enum: ['Premium', 'Free']},playlists: {bsonType: 'array',items: {
    title:'object',required: [         'title',          'num_songs',          'date_create',          'state'],properties: {title: {bsonType: 'string'},num_songs: {bsonType: 'int'},date_create: {bsonType: 'date'},state: {enum: ['A', 'D']},date_deleted: {bsonType: 'date'},songs_added: {bsonType: 'array',items: {
    title:'object',required: [         'id_song',          'id_user',          'date_added'],properties: {id_song: {bsonType: 'objectId'},id_user: {bsonType: 'objectId'},date_added: {bsonType: 'date'}}}}}}},subscription: {bsonType: 'array',items: {
    title:'object',required: [         'date_start',          'date_renew',          'payments'],properties: {date_start: {bsonType: 'date'},date_renew: {bsonType: 'date'},payments: {bsonType: 'array',items: {
    title:'object',required: [         'date',          'total',          'type'],properties: {date: {bsonType: 'date'},total: {bsonType: 'double'},type: {enum: ['Paypal', 'Credit Card']}}}}}}},paypal_details: {bsonType: 'object',
    title:'object',required: [         'username'],properties: {username: {bsonType: 'string'}}},credit_card_details: {bsonType: 'object',
    title:'object',required: [         'number',          'date_cad',          'cvv'],properties: {number: {bsonType: 'int'},date_cad: {bsonType: 'date'},cvv: {bsonType: 'int'}}}}         }      },
    autoIndexId:true
    });  
     db.users.createIndex(
    {
    "username": 1
    },
     {
    name: "users_ix_1",
    unique: true
    }
    )
    
    
    db.createCollection( 'artists', {validator: {$jsonSchema: {bsonType: 'object',title:'artists',required: [         'name',          'image',          'albums'],properties: {name: {bsonType: 'string'},image: {bsonType: 'binData'},albums: {bsonType: 'array',items: {
    title:'object',required: [         'title',          'date_publication',          'cover_image',          'songs'],properties: {title: {bsonType: 'string'},date_publication: {bsonType: 'date'},cover_image: {bsonType: 'binData'},songs: {bsonType: 'array',items: {
    title:'object',required: [         'title',          'length',          'reproductions'],properties: {title: {bsonType: 'string'},length: {bsonType: 'double'},reproductions: {bsonType: 'int'}}}}}}},resemble: {bsonType: 'objectId'}}         }      },
    autoIndexId:true
    });  