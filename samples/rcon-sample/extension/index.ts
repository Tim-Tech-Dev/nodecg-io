import { NodeCG } from "nodecg/types/server";
import { ServiceProvider } from "nodecg-io-core/extension/types";
import { RconServiceClient } from "nodecg-io-rcon/extension";

module.exports = function (nodecg: NodeCG) {
    nodecg.log.info("Sample bundle for rcon started");

    const rcon = (nodecg.extensions["nodecg-io-rcon"] as unknown) as ServiceProvider<RconServiceClient> | undefined;
    rcon?.requireService(
        "rcon-sample",
        (client) => {
            nodecg.log.info("Rcon sample has been updated, adding handlers for messages.");
            addHandler(client);
        },
        () => nodecg.log.info("Rcon sample has been unset."),
    );
};

function addHandler(client: RconServiceClient) {
    client.sendMessage("nodecg-io speaking!");
}
