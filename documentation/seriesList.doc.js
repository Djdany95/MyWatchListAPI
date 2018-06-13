/**
 * @api {get} /series/:username GetSeriesList
 * @apiName GetSeriesList
 * @apiGroup SeriesList
 * @apiDescription Get list for requested User
 *
 * @apiParam {String} username User username.
 *
 * @apiSuccess {String} accion Action made.
 * @apiSuccess {JSON} data  Data requested.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       accion: "get seriesList",
 *       data: seriesList{data}
 *     }
 *
 * @apiError accion Action made.
 * @apiError error  Error caught.
 *
 * @apiErrorExample List Not Found:
 *     HTTP/1.1 404 Not Found
 *     {
 *       accion: "get seriesList",
 *       error: "Series 404"
 *     }
 *
 * @apiError accion Action made.
 * @apiError error  Error caught.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Server Error
 *     {
 *       accion: "get seriesList",
 *       error: "Server Error 500"
 *     }
 */

/**
 * @api {get} /countSeries/:username CountSeries
 * @apiName CountSeries
 * @apiGroup SeriesList
 * @apiDescription Get series' count from user requested
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
 *       data: countSeries{data}
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
 * @api {post} /series/ NewSeries
 * @apiName NewSeries
 * @apiGroup SeriesList
 * @apiDescription Add new series to user seriesList
 *
 * @apiParam {String} username User username.
 * @apiParam {String} pass User pass (Hashed).
 * @apiParam {String} id Series imdbID.
 * @apiParam {String} name Series name.
 * @apiParam {Boolean} active If watching series.
 * @apiParam {Number} temp Series actual season.
 * @apiParam {Number} epA Series actual episode.
 *
 * @apiSuccess {String} accion Action made.
 * @apiSuccess {String} data Data requested.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       accion: "save series",
 *       data: "newSeries"
 *     }
 *
 * @apiError accion Action made.
 * @apiError error  Error caught.
 *
 * @apiErrorExample Email-Error:
 *     HTTP/1.1 500 Server Error
 *     {
 *       accion: "save series",
 *       error: "Server Error"
 *     }
 */

/**
 * @api {put} /series/:id UpdateSeries
 * @apiName UpdateSeries
 * @apiGroup SeriesList
 * @apiDescription Change series params
 *
 * @apiParam {String} id Series imdbID.
 * @apiParam {String} username User username.
 * @apiParam {String} pass User pass (Hashed).
 * @apiParam {String} name Series name.
 * @apiParam {Boolean} active If watching series.
 * @apiParam {Number} temp Series actual season.
 * @apiParam {Number} epA Series actual episode.
 *
 * @apiSuccess {String} accion Action made.
 * @apiSuccess {String} data  Data requested.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       accion: "update series",
 *       data: "seriesUpdated"
 *     }
 *
 * @apiError accion Action made.
 * @apiError error  Error caught.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Server Error
 *     {
 *       accion: "update series",
 *       error: "Server Error 500"
 *     }
 */

/**
 * @api {delete} /series/:id DropSeries
 * @apiName DropSeries
 * @apiGroup SeriesList
 * @apiDescription Delete series from user seriesList
 *
 * @apiParam {String} id Series imdbID.
 * @apiParam {String} username User username.
 * @apiParam {String} pass User pass (Hashed).
 *
 * @apiSuccess {String} accion Action made.
 * @apiSuccess {String} data  Data requested.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       accion: "delete series",
 *       data: "seriesDropped"
 *     }
 *
 * @apiError accion Action made.
 * @apiError error  Error caught.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Server Error
 *     {
 *       accion: "delete series",
 *       error: "Server Error 500"
 *     }
 */
