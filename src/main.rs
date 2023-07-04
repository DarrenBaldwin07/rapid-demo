use clerk_rs::{validators::actix::ClerkMiddleware, ClerkConfiguration};
use rapid_web::actix::{App, HttpRequest, HttpResponse, HttpServer, Result};
use rapid_web::cors::Cors;
use rapid_web::rapid_web_codegen::{main, rapid_configure, routes};
use rapid_web::server::RapidServer;
use serde::{Deserialize, Serialize};
use std::env::current_dir;
use walkdir::WalkDir;

rapid_configure!("src/routes");

pub type TestAlias2 = i32;

#[main]
async fn main() -> std::io::Result<()> {
    let app = RapidServer::create(None, None);

    app.listen(HttpServer::new(move || {
        let cors = Cors::permissive();
        let config = ClerkConfiguration::new(None, None, Some("sk_test_key".to_string()), None);

        RapidServer::fs_router(Some(cors), None, routes!("src/routes")).wrap(ClerkMiddleware::new(
            config,
            Some(vec![String::from("/test/test2")]),
        ))
    }))
    .await
}
