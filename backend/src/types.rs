#![allow(proc_macro_derive_resolution_fallback)]
#[derive(Serialize, Deserialize, Queryable)]
pub struct Contest {
    pub year: i32,
    pub location: Option<String>,
    pub region: Option<String>,
}
