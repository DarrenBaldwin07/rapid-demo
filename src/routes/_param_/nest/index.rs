use rapid_web::actix::{web, HttpResponse};
use rapid_web::rapid_web_codegen::rapid_handler;

pub const ROUTE_KEY: &str = "route";

#[rapid_handler]
pub async fn get() -> HttpResponse {
    HttpResponse::Ok().body("THIS IS THE INDEX ROUTE IN NEST")
}
