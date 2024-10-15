use sha1::Digest;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn md5(file_data: &[u8]) -> String {
    let digest = md5::compute(file_data);
    format!("{:x}", digest)
}

#[wasm_bindgen]
pub fn sha1(file_data: &[u8]) -> String {
    let mut hasher = sha1::Sha1::new();

    hasher.update(file_data);
    let result = hasher.finalize();

    format!("{:x}", result)
}

#[wasm_bindgen]
pub fn sha256(file_data: &[u8]) -> String {
    let mut hasher = sha2::Sha256::new();

    hasher.update(file_data);
    let result = hasher.finalize();

    format!("{:x}", result)
}
