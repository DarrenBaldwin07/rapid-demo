use rapid_web::actix::{web, HttpResponse};
use rapid_web::rapid_web_codegen::rapid_handler;
use rapid_web::request::RapidJson;

pub const ROUTE_KEY: &str = "helloWorld";
pub type RapidOutput = String;

#[rapid_handler]
pub async fn mutation() -> HttpResponse {
    HttpResponse::Ok().body("THIS IS THE INDEX ROUTE IN test")
}
