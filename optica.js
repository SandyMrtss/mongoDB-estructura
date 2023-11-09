
db.createCollection( 'suppliers', {validator: {$jsonSchema: {bsonType: 'object',title:'suppliers',required: [         'name',          'address',          'phone',          'fax',          'nif',          'brand'],properties: {name: {bsonType: 'string'},address: {bsonType: 'object',
title:'object',required: [         'street',          'city',          'postal_code',          'country'],properties: {street: {bsonType: 'string'},number: {bsonType: 'int'},floor: {bsonType: 'string'},door: {bsonType: 'string'},city: {bsonType: 'string'},postal_code: {bsonType: 'int'},country: {bsonType: 'string'}}},phone: {bsonType: 'int'},fax: {bsonType: 'int'},nif: {bsonType: 'int'},brand: {bsonType: 'array',items: {
title:'object',required: [         'name'],properties: {name: {bsonType: 'string'}}}}}         }      },
autoIndexId:true
});  
db.createCollection( 'employees', {validator: {$jsonSchema: {bsonType: 'object',title:'employees',required: [         'name',          'last_name'],properties: {name: {bsonType: 'string'},last_name: {bsonType: 'string'}}         }      },
autoIndexId:true
});  
db.createCollection( 'clients', {validator: {$jsonSchema: {bsonType: 'object',title:'clients',required: [         'name',          'last_name',          'mail',          'register_date',          'recommended_by',          'address',          'purchases'],properties: {name: {bsonType: 'string'},last_name: {bsonType: 'string'},mail: {bsonType: 'string'},register_date: {bsonType: 'date'},recommended_by: {bsonType: 'objectId'},address: {bsonType: 'object',
title:'object',required: [         'street',          'city',          'postal_code',          'country'],properties: {street: {bsonType: 'string'},number: {bsonType: 'int'},floor: {bsonType: 'string'},door: {bsonType: 'string'},city: {bsonType: 'string'},postal_code: {bsonType: 'int'},country: {bsonType: 'string'}}},purchases: {bsonType: 'array',items: {
title:'object',required: [         'glasses',          'date',          'id_employee'],properties: {glasses: {bsonType: 'array',items: {
title:'object',required: [         'prescription',          'frame_type',          'frame_colour',          'glass_colour',          'price',          'id_brand'],properties: {prescription: {bsonType: 'array',items: {bsonType: 'double'}},frame_type: {enum: ['Flotant', 'Metalica', 'Pasta']},frame_colour: {bsonType: 'string'},glass_colour: {bsonType: 'string'},price: {bsonType: 'double'},id_brand: {bsonType: 'objectId'}}}},date: {bsonType: 'date'},id_employee: {bsonType: 'objectId'}}}}}         }      },
autoIndexId:true
});  