use rapid_web::actix::{web, HttpResponse};
use rapid_web::rapid_web_codegen::rapid_handler;
use rapid_web::request::RapidJson;
use serde::{Deserialize, Serialize};
use rapid_web::types::Union;

pub type RapidOutput = Union<String, i32>;
pub const ROUTE_KEY : &str = "lolRoute";

#[rapid_handler]
pub async fn mutation(body: RapidJson<i32>) -> HttpResponse {
    HttpResponse::Ok().content_type("text/plain").body("THIS IS THE INDEX ROUTE IN the root!")
}

