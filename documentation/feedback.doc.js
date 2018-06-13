/**
 * @api {post} /sendfeedback/ SendFeedback
 * @apiName SendFeedback
 * @apiGroup Feedback
 * @apiDescription Send to DB user email and message from Web Feedback Form by Users
 *
 * @apiParam {String} email User email.
 * @apiParam {String} msg Message from Web Feedback Form by User.
 *
 * @apiSuccess {String} accion Action made.
 * @apiSuccess {String} data  Data requested.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       accion: "send feedback",
 *       data: "feedbackOK"
 *     }
 *
 * @apiError accion Action made.
 * @apiError error  Error caught.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Server Error
 *     {
 *       accion: "send feedback",
 *       error: "Server Error 500"
 *     }
 */

/**
 * @api {post} /getFeedback/ GetFeedback
 * @apiName GetFeedback
 * @apiGroup Feedback
 * @apiDescription Fetch all feedback DB
 *
 * @apiParam {String} masterKey Keyword to fetch all feedback DB.
 *
 * @apiSuccess {String} accion Action made.
 * @apiSuccess {JSON} data  Data requested.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       accion: "get feedback",
 *       data: feedback{data}
 *     }
 *
 * @apiError accion Action made.
 * @apiError error  Error caught.
 *
 * @apiErrorExample Access-Denied:
 *     HTTP/1.1 500 Server Error
 *     {
 *       accion: "get feedback",
 *       error: "ACCESS DENIED"
 *     }
 */
