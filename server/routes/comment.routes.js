import express from 'express';
import controllers from '../controllers';
import middlewares from '../middlewares';

const { tokenValidator, commentMiddleware } = middlewares;
const { commentController } = controllers;

const router = express.Router();

/**
 * @swagger
 *
 * /comment:
 *   post:
 *     tags:
 *       - comment
 *     description: authenticated user can comment on an article
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: body
 *         description: Required Article comment payload
 *         required: true
 *         schema:
 *           $ref: '#/definitions/comment'
 *     responses:
 *       201:
 *         description: Success
 *       400:
 *         description: Bad request
 *       401:
 *         description: unauthorized
 *       403:
 *         description: Forbidden
 *       500:
 *         description: ran
 */

router.post(
  '/comment',
  tokenValidator.verifyToken,
  commentMiddleware.validatePostComment,
  commentController.post
);

/**
 * @swagger
 *
 *  /comment/{commentid}/history:
 *   get:
 *     tags:
 *       - comment
 *     description: get all comments and it's lists of edited histories
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: path
 *         name: commentid
 *         description: Requires comment id
 *         required: true
 *         schema:
 *           $ref: '#/definitions/comment'
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Bad request
 *       401:
 *         description: unauthorized
 *       403:
 *         description: Forbidden
 *       500:
 *         description: ran
 */

router.get(
  '/comment/:commentid/history',
  tokenValidator.verifyToken,
  commentController.getCommentAndHistories
);

/**
 * @swagger
 *
 *  /comment/{commentid}/edit:
 *   patch:
 *     tags:
 *       - comment
 *     description: update's comment
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: path
 *         name: commentid
 *         description: Requires comment id
 *         required: true
 *         schema:
 *           $ref: '#/definitions/comment'
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Bad request
 *       401:
 *         description: unauthorized
 *       403:
 *         description: Forbidden
 *       500:
 *         description: ran
 */
router.patch(
  '/comment/:commentid/edit',
  tokenValidator.verifyToken,
  commentMiddleware.validateEditComment,
  commentController.updateComment
);

/**
 * @swagger
 *
 *  /comment/{commentid}/delete:
 *   delete:
 *     tags:
 *       - comment
 *     description: deletes a comment and all it's history
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: path
 *         name: commentid
 *         description: Requires comment id
 *         required: true
 *         schema:
 *           $ref: '#/definitions/comment'
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Bad request
 *       401:
 *         description: unauthorized
 *       403:
 *         description: Forbidden
 *       500:
 *         description: ran
 */
router.delete(
  '/comment/:commentid/delete',
  tokenValidator.verifyToken,
  commentController.deleteComment
);

export default router;
