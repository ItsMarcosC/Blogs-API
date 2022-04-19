const PostsCategories = (sequelize, _DataTypes) => {
  const PostsCategory = sequelize.define(
    'PostsCategory',
    {},
    { timestamps: false, tableName: 'PostsCategories' },
  );

  PostsCategory.associate = (models) => {
    models.Category.belongsToMany(models.Blogpost, {
      as: 'BlogPosts',
      through: PostsCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId' });
  };

  PostsCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, 
      { as: 'categories', through: PostsCategory, foreignKey: 'postId', otherKey: 'categoryId' });
  };
  return PostsCategory;
};

module.exports = PostsCategories;
