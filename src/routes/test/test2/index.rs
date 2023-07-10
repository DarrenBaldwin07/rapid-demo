use rapid_web::actix::{web, HttpResponse};
use rapid_web::rapid_web_codegen::rapid_handler;

pub const ROUTE_KEY: &str = "test2";
pub type RapidOutput = i32;

#[rapid_handler]
pub async fn get() -> HttpResponse {
    HttpResponse::Ok().body("INDEX ROUTE IN TEST2")
}
