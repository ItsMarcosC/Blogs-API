const blogposts = (sequelize, DataTypes) => {
  const blogpost = sequelize.define('BlogPost', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: { type: DataTypes.INTEGER, foreignKey: true },
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  }, {
    timestamps: false,
    tableName: 'BlogPosts',
  });
  blogpost.associate = (models) => {
    blogpost.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
  };
    return blogpost;
  };

module.exports = blogposts;
