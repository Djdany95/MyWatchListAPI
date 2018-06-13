/**
 * @api {get} /user/:username/:email FindUser
 * @apiName FindUser
 * @apiGroup User
 * @apiDescription Request if user already exists
 *
 * @apiParam {String} username User username.
 * @apiParam {String} email User email.
 *
 * @apiSuccess {String} accion Action made.
 * @apiSuccess {String} data  Data requested.
 *
 * @apiSuccessExample Username-Exists:
 *     HTTP/1.1 200 OK
 *     {
 *       accion: "get user",
 *       data: "username"
 *     }
 * 
 * @apiSuccess {String} accion Action made.
 * @apiSuccess {String} data  Data requested.
 *
 * @apiSuccessExample Email-Exists:
 *     HTTP/1.1 200 OK
 *     {
 *       accion: "get user",
 *       data: "email"
 *     }
 *
 * @apiError accion Action made.
 * @apiError error  Error caught.
 *
 * @apiErrorExample User Not Found:
 *     HTTP/1.1 404 Not Found
 *     {
 *       accion: "get user",
 *       error: "User 404"
 *     }
 *
 * @apiError accion Action made.
 * @apiError error  Error caught.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Server Error
 *     {
 *       accion: "get user",
 *       error: "Server Error 500"
 *     }
 */

 /**
 * @api {get} /shareduser/:username SharedUser
 * @apiName SharedUser
 * @apiGroup User
 * @apiDescription Get name and image from user passed to show in sharedList
 *
 * @apiParam {String} username User username.
 *
 * @apiSuccess {String} accion Action made.
 * @apiSuccess {JSON} data  User requested.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       accion: "get user",
 *       data: user{name, image}
 *     }
 *
 * @apiError accion Action made.
 * @apiError error  Error caught.
 *
 * @apiErrorExample User Not Found:
 *     HTTP/1.1 404 Not Found
 *     {
 *       accion: "get user",
 *       error: "User 404"
 *     }
 *
 * @apiError accion Action made.
 * @apiError error  Error caught.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Server Error
 *     {
 *       accion: "get user",
 *       error: "Server Error 500"
 *     }
 */

  /**
 * @api {post} /register/ Register
 * @apiName Register
 * @apiGroup User
 * @apiDescription Register a user, send an email if all is OK
 *
 * @apiParam {String} username User username.
 * @apiParam {String} email User email.
 * @apiParam {String} pass User pass (Hashed).
 *
 * @apiSuccess {String} accion Action made.
 * @apiSuccess {String} data Data requested.
 * @apiSuccess {JSON} email Response from sent email.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       accion: "save user",
 *       data: "userRegistered",
 *       email: info.response (from .sendMail)
 *     }
 *
 * @apiError accion Action made.
 * @apiError error  Error caught.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Not Found
 *     {
 *       accion: "save user",
 *       error: "Server Error"
 *     }
 *
 * @apiError accion Action made.
 * @apiError error  Error caught.
 *
 * @apiErrorExample Email-Error:
 *     HTTP/1.1 500 Server Error
 *     {
 *       accion: "save user",
 *       error: error (from .sendMail)
 *     }
 */

  /**
 * @api {get} /confirmemail/:uniqid ConfirmEmail
 * @apiName ConfirmEmail
 * @apiGroup User
 * @apiDescription Confirm user register based in the uniqid
 *
 * @apiParam {String} uniqid User uniqid calculated when registered.
 *
 * @apiSuccess {String} accion Action made.
 * @apiSuccess {String} data  Data requested.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       accion: "confirm email",
 *       data: "userConfirmed"
 *     }
 *
 * @apiError accion Action made.
 * @apiError error  Error caught.
 *
 * @apiErrorExample User Not Found:
 *     HTTP/1.1 404 Not Found
 *     {
 *       accion: "confirm email",
 *       error: "User 404"
 *     }
 *
 * @apiError accion Action made.
 * @apiError error  Error caught.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Server Error
 *     {
 *       accion: "confirm email",
 *       error: "Server Error 500"
 *     }
 */

   /**
 * @api {post} /login/ Login
 * @apiName Login
 * @apiGroup User
 * @apiDescription Authenticate user from DB and updates lastLogin field
 *
 * @apiParam {String} username User username.
 * @apiParam {String} pass User pass (Hashed).
 *
 * @apiSuccess {String} accion Action made.
 * @apiSuccess {JSON} data  Data requested.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       accion: "get user",
 *       data: user{data}
 *     }
 *
 * @apiError accion Action made.
 * @apiError error  Error caught.
 *
 * @apiErrorExample User Not Found:
 *     HTTP/1.1 404 Not Found
 *     {
 *       accion: "get user",
 *       error: "User 404"
 *     }
 *
 * @apiError accion Action made.
 * @apiError error  Error caught.
 *
 * @apiErrorExample User Not Confirmed:
 *     HTTP/1.1 403 Forbidden
 *     {
 *       accion: "get user",
 *       error: "User not confirmed"
 *     }
 * 
 * @apiError accion Action made.
 * @apiError error  Error caught.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Server Error
 *     {
 *       accion: "get user",
 *       error: "Server Error 500"
 *     }
 */

 /**
 * @api {get} /remember/:email RememberAuth
 * @apiName RememberAuth
 * @apiGroup User
 * @apiDescription Send an email with username and new pass random generated
 *
 * @apiParam {String} email User email to send new credentials.
 *
 * @apiSuccess {String} accion Action made.
 * @apiSuccess {JSON} email  Data requested.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       accion: "remember credentials",
 *       email: info.response (from .sendMail)
 *     }
 *
 * @apiError accion Action made.
 * @apiError error  Error caught.
 *
 * @apiErrorExample User Not Found:
 *     HTTP/1.1 500 Not Found
 *     {
 *       accion: "remember credentials",
 *       error: "Server Error"
 *     }
 *
 * @apiError accion Action made.
 * @apiError error  Error caught.
 *
 * @apiErrorExample Email-Error:
 *     HTTP/1.1 500 Server Error
 *     {
 *       accion: "remember credentials",
 *       error: error (from .sendMail)
 *     }
 */

  /**
 * @api {put} /changepass/ ChangePass
 * @apiName ChangePass
 * @apiGroup User
 * @apiDescription Sets new pass to user
 *
 * @apiParam {String} username User username.
 * @apiParam {String} pass User pass (Hashed).
 * @apiParam {String} newPass User new pass (Hashed).
 *
 * @apiSuccess {String} accion Action made.
 * @apiSuccess {String} data  Data requested.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       accion: "change pass",
 *       data: "passChanged"
 *     }
 * 
 * @apiError accion Action made.
 * @apiError error  Error caught.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Server Error
 *     {
 *       accion: "change pass",
 *       error: "Server Error 500"
 *     }
 */

 /**
 * @api {put} /changeimage/ ChangeImage
 * @apiName ChangeImage
 * @apiGroup User
 * @apiDescription Sets new image to user
 *
 * @apiParam {String} username User username.
 * @apiParam {String} pass User pass (Hashed).
 * @apiParam {String} imageUrl User new imageURL.
 *
 * @apiSuccess {String} accion Action made.
 * @apiSuccess {String} data  Data requested.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       accion: "change image",
 *       data: "imageChanged"
 *     }
 *
 * @apiError accion Action made.
 * @apiError error  Error caught.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Server Error
 *     {
 *       accion: "change image",
 *       error: "Server Error 500"
 *     }
 */

 /**
 * @api {delete} /user/ DeleteUser
 * @apiName DeleteUser
 * @apiGroup User
 * @apiDescription Delete user account
 *
 * @apiParam {String} username User username.
 * @apiParam {String} pass User pass (Hashed).
 *
 * @apiSuccess {String} accion Action made.
 * @apiSuccess {String} data  Data requested.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       accion: "delete user",
 *       data: "userDeleted"
 *     }
 *
 * @apiError accion Action made.
 * @apiError error  Error caught.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Server Error
 *     {
 *       accion: "delete user",
 *       error: "Server Error 500"
 *     }
 */

  /**
 * @api {post} /masterUsers/ MasterUsers
 * @apiName MasterUsers
 * @apiGroup User
 * @apiDescription Fetch all DB
 *
 * @apiParam {String} masterKey Keyword to fetch all DB.
 *
 * @apiSuccess {String} accion Action made.
 * @apiSuccess {JSON} data  Data requested.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       accion: "geet users",
 *       data: users{data}
 *     }
 *
 * @apiError accion Action made.
 * @apiError error  Error caught.
 *
 * @apiErrorExample Access-Denied:
 *     HTTP/1.1 500 Server Error
 *     {
 *       accion: "get users",
 *       error: "ACCESS DENIED"
 *     }
 */