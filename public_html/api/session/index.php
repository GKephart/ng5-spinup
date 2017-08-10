<?php
require_once dirname(__DIR__, 3) . "/php/lib/xsrf.php";

$reply = new stdClass();
$reply->status = 200;
$reply->data = null;

try {


	//verify the HTTP method being used
	$method = array_key_exists("HTTP_X_HTTP_METHOD", $_SERVER) ? $_SERVER["HTTP_X_HTTP_METHOD"] : $_SERVER["REQUEST_METHOD"];

	if($method === "HEAD" || $method === "GET") {

		//verify the session, start if not active
		if(session_status() !== PHP_SESSION_ACTIVE) {
			session_start();
		}

		setXsrfCookie();
		$reply->data = new stdClass();
		$reply->data->name = "Arlo Kt'zik";
		$reply->data->rank = "Senator";
		$reply->data->party = "Fuzzy";
	} else {
		throw (new \InvalidArgumentException("attempting to brew coffee with a teapot", 418));
	}

} catch(\Exception  | \TypeError $exception) {
	$reply->status = $exception->getCode();
	$reply->message = $exception->getMessage();
}

header("Content-type: application/json");
if($reply->data === null) {
	unset($reply->data);
}
//encode and return reply to front end caller
echo json_encode($reply);
