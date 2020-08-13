const transformModel = (options = { schema: null, exclude: [] }) => {
  const { schema, exclude } = options;

  const schemaObj = schema.toObject();

  if (exclude) {
    exclude.push('__v');
    exclude.forEach(prop => delete schemaObj[prop]);
  }

  if (schemaObj._id) {
    schemaObj.id = schema._id;
    delete schemaObj._id;
  }

  return schemaObj;
};

module.exports = transformModel;
