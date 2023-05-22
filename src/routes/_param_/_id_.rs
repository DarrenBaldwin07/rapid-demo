use rapid_web::actix::{web, HttpResponse};
use rapid_web::rapid_web_codegen::rapid_handler;
use rapid_web::request::RapidPath;

#[rapid_handler]
pub async fn get(param: RapidPath<(String, String)>) -> HttpResponse {
    HttpResponse::Ok().body(format!("Double nested param route, {:?}", param))
}
