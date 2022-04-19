const blogposts = (sequelize, DataTypes) => {
  const Blogpost = sequelize.define('BlogPost', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: { type: DataTypes.INTEGER, foreignKey: true },
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  }, {
    timestamps: false,
    tableName: 'BlogPosts',
  });
  Blogpost.associate = (models) => {
    Blogpost.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
  };
    return Blogpost;
  };

module.exports = blogposts;
