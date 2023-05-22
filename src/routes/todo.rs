use rapid_web::actix::{web, HttpResponse};
use rapid_web::rapid_web_codegen::rapid_handler;

#[rapid_handler]
pub async fn query() -> HttpResponse {
    HttpResponse::Ok().body("TODO")
}
