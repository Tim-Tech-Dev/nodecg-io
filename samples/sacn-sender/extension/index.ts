import { NodeCG } from "nodecg/types/server";
import { requireService } from "nodecg-io-core/extension/serviceClientWrapper";
import { SacnSenderServiceClient } from "nodecg-io-sacn-sender";

module.exports = function (nodecg: NodeCG) {
    nodecg.log.info("Sample bundle for sacn-sender started");

    const service = requireService<SacnSenderServiceClient>(nodecg, "sacn-sender");
    service?.onAvailable((client) => {
        nodecg.log.info("sacn-sender has been updated.");

        setInterval(() => {
            const channel = Math.round(Math.random() * 512).toString();
            const value = Math.round(Math.random() * 100);
            const payload = {
                [channel]: value,
            };
            nodecg.log.info("Sending " + value + " to channel #" + channel);
            client.sendPayload(payload);
        }, 10000);
    });

    service?.onUnavailable(() => nodecg.log.info("sacn-sender has been unset."));
};