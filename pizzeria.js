
db.createCollection( 'restaurant', {validator: {$jsonSchema: {bsonType: 'object',title:'restaurant',required: [         'postal_code',          'address',          'id_city'],properties: {postal_code: {bsonType: 'int'},address: {bsonType: 'string'},id_city: {bsonType: 'objectId'}}         }      },
autoIndexId:true
});  
db.createCollection( 'order', {validator: {$jsonSchema: {bsonType: 'object',title:'order',required: [         'time',          'type',          'total',          'id_client',          'id_restaurant',          'products'],properties: {time: {bsonType: 'timestamp'},type: {enum: ['PU','D']},total: {bsonType: 'double'},id_client: {bsonType: 'objectId'},id_employee: {bsonType: 'objectId'},id_restaurant: {bsonType: 'objectId'},products: {bsonType: 'array',items: {bsonType: 'objectId'}}}         }      },
autoIndexId:true
});  
db.createCollection( 'client', {validator: {$jsonSchema: {bsonType: 'object',title:'client',required: [         'name',          'last_name',          'postal_code',          'phone',          'create_date',          'id_city'],properties: {name: {bsonType: 'string'},last_name: {bsonType: 'string'},postal_code: {bsonType: 'int'},phone: {bsonType: 'int'},create_date: {bsonType: 'date'},id_city: {bsonType: 'objectId'}}         }      },
autoIndexId:true
});  
db.createCollection( 'employees', {validator: {$jsonSchema: {bsonType: 'object',title:'employees',required: [         'name',          'last_name',          'nif',          'phone',          'type',          'id_restaurant'],properties: {name: {bsonType: 'string'},last_name: {bsonType: 'string'},nif: {bsonType: 'string'},phone: {bsonType: 'int'},type: {enum: ['C','D']},id_restaurant: {bsonType: 'objectId'}}         }      },
autoIndexId:true
});  
 db.employees.createIndex(
{
"nif": 1
},
 {
name: "employees_ix_1",
unique: true
}
)


db.createCollection( 'products', {validator: {$jsonSchema: {bsonType: 'object',title:'products',required: [         'name',          'description',          'image',          'price',          'type'],properties: {name: {bsonType: 'string'},description: {bsonType: 'string'},image: {bsonType: 'binData'},price: {bsonType: 'double'},type: {enum: ['H', 'D', 'P']},pizza_category: {bsonType: 'objectId'}}         }      },
autoIndexId:true
});  
db.createCollection( 'provinces', {validator: {$jsonSchema: {bsonType: 'object',title:'provinces',required: [         'name',          'cities'],properties: {name: {bsonType: 'string'},cities: {bsonType: 'array',items: {
title:'object',required: [         'name'],properties: {name: {bsonType: 'string'}}}}}         }      },
autoIndexId:true
});  
db.createCollection( 'pizza_categories', {validator: {$jsonSchema: {bsonType: 'object',title:'pizza_categories',required: [         'name'],properties: {name: {bsonType: 'string'}}         }      },
autoIndexId:true
});  