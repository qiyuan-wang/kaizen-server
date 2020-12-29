import shell from "shelljs";
import Env from "../../configs/environments";
import path from "path";

export async function buildKaizen() {
  shell.exec(path.resolve(__dirname, "./rebuild.sh"), { async: true });
}
