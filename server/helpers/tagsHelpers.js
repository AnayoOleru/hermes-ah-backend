import models from '../models';

const { Keyword } = models;

const serverError = 'Server error, please try again later';
// const emptyArticleId = 'You need to provide an article ID to proceed';
// const emptyTags = 'You need to provide an tags to proceed';

const tagging = {
  /**
   *
   * @param {*} articleId
   * @param {*} tags
   * @returns {*}  userId, articleId and keywords in an array.
   */
  async saveArticleTags(articleId, tags) {
    try {
      const Articletags = await Keyword.create({
        article_id: articleId,
        keyword: tags,
      });
      return Articletags;
    } catch (err) {
      return serverError;
    }
  },
};

export default tagging;
