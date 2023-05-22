use rapid_web::actix::{web, HttpResponse};
use rapid_web::request::RapidPath;
use rapid_web::rapid_web_codegen::rapid_handler;


#[rapid_handler]
pub async fn get(param: RapidPath<String>) -> HttpResponse {
    HttpResponse::Ok().body(format!("INDEX ROUTE IN PARAM {}", param))
}
