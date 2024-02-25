import { run } from "starknet-batcher";
import { simpleInfo } from "starknet-batcher/src/opInfo/simple";

run(simpleInfo, ["add"], ["test2"]);
