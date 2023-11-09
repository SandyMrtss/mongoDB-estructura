
db.createCollection( 'user', {validator: {$jsonSchema: {bsonType: 'object',title:'user',required: [         'username',          'email',          'password',          'dob',          'gender',          'country',          'postal_code'],properties: {username: {bsonType: 'string'},email: {bsonType: 'string'},password: {bsonType: 'string'},dob: {bsonType: 'date'},gender: {enum: ['F','M','O']},country: {bsonType: 'string'},channel: {bsonType: 'object',
title:'object',required: [         'name',          'description',          'date_creation'],properties: {name: {bsonType: 'string'},description: {bsonType: 'string'},date_creation: {bsonType: 'timestamp'},videos: {bsonType: 'array',items: {
title:'object',required: [         'title',          'description',          'size',          'likes_dislikes',          'file_name',          'length',          'views',          'state',          'date',          'thumbnail',          'tag'],properties: {title: {bsonType: 'string'},description: {bsonType: 'string'},size: {bsonType: 'int'},likes_dislikes: {bsonType: 'object',
title:'object',required: [         'total_likes',          'total_dislikes'],properties: {user_action: {bsonType: 'array',items: {
title:'object',required: [         'id_user',          'type',          'date'],properties: {id_user: {bsonType: 'objectId'},type: {enum: ['Like', 'Dislike']},date: {bsonType: 'timestamp'}}}},total_likes: {bsonType: 'int'},total_dislikes: {bsonType: 'int'}}},file_name: {bsonType: 'string'},length: {bsonType: 'double'},views: {bsonType: 'int'},state: {enum: ['Public', 'Private', 'Hidden']},comments: {bsonType: 'array',items: {
title:'object',required: [         'commented_by',          'liked_disliked',          'text',          'date'],properties: {commented_by: {bsonType: 'objectId'},liked_disliked: {bsonType: 'object',
title:'object',required: [         'total_likes',          'total_dislikes'],properties: {users: {bsonType: 'array',items: {
title:'object',required: [         'id_user',          'type',          'date'],properties: {id_user: {bsonType: 'objectId'},type: {enum: ['Like', 'Dislike']},date: {bsonType: 'timestamp'}}}},total_likes: {bsonType: 'int'},total_dislikes: {bsonType: 'int'}}},text: {bsonType: 'string'},date: {bsonType: 'timestamp'}}}},date: {bsonType: 'timestamp'},thumbnail: {bsonType: 'binData'},tag: {bsonType: 'objectId'}}}}}},playlists: {bsonType: 'array',items: {
title:'object',required: [         'name',          'date_creation',          'state',          'videos'],properties: {name: {bsonType: 'string'},date_creation: {bsonType: 'timestamp'},state: {enum: ['Public', 'Hidden']},videos: {bsonType: 'array',items: {bsonType: 'objectId'}}}}},postal_code: {bsonType: 'string'},subscribed_to: {bsonType: 'array',items: {bsonType: 'objectId'}}}         }      },
autoIndexId:true
});  
 db.user.createIndex(
{
"username": 1
},
 {
name: "user_ix_1",
unique: true
}
)


db.createCollection( 'tags', {validator: {$jsonSchema: {bsonType: 'object',title:'tags',required: [         'name'],properties: {name: {bsonType: 'string'}}         }      },
autoIndexId:true
});  