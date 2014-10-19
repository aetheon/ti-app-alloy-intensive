function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_285";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_285 = Ti.UI.createView({
        id: "widget_285"
    });
    $.__views.widget_285 && $.addTopLevelView($.__views.widget_285);
    $.__views.__alloyId5408 = Ti.UI.createView({
        id: "__alloyId5408"
    });
    $.__views.widget_285.add($.__views.__alloyId5408);
    $.__views.__alloyId5409 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5409"
    });
    $.__views.__alloyId5408.add($.__views.__alloyId5409);
    $.__views.__alloyId5410 = Ti.UI.createView({
        id: "__alloyId5410"
    });
    $.__views.__alloyId5410 && $.addTopLevelView($.__views.__alloyId5410);
    $.__views.__alloyId5411 = Ti.UI.createView({
        id: "__alloyId5411"
    });
    $.__views.__alloyId5410.add($.__views.__alloyId5411);
    $.__views.__alloyId5412 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5412"
    });
    $.__views.__alloyId5411.add($.__views.__alloyId5412);
    $.__views.__alloyId5413 = Ti.UI.createView({
        id: "__alloyId5413"
    });
    $.__views.__alloyId5413 && $.addTopLevelView($.__views.__alloyId5413);
    $.__views.__alloyId5414 = Ti.UI.createView({
        id: "__alloyId5414"
    });
    $.__views.__alloyId5413.add($.__views.__alloyId5414);
    $.__views.__alloyId5415 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5415"
    });
    $.__views.__alloyId5414.add($.__views.__alloyId5415);
    $.__views.__alloyId5416 = Ti.UI.createView({
        id: "__alloyId5416"
    });
    $.__views.__alloyId5416 && $.addTopLevelView($.__views.__alloyId5416);
    $.__views.__alloyId5417 = Ti.UI.createView({
        id: "__alloyId5417"
    });
    $.__views.__alloyId5416.add($.__views.__alloyId5417);
    $.__views.__alloyId5418 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5418"
    });
    $.__views.__alloyId5417.add($.__views.__alloyId5418);
    $.__views.__alloyId5419 = Ti.UI.createView({
        id: "__alloyId5419"
    });
    $.__views.__alloyId5419 && $.addTopLevelView($.__views.__alloyId5419);
    $.__views.__alloyId5420 = Ti.UI.createView({
        id: "__alloyId5420"
    });
    $.__views.__alloyId5419.add($.__views.__alloyId5420);
    $.__views.__alloyId5421 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5421"
    });
    $.__views.__alloyId5420.add($.__views.__alloyId5421);
    $.__views.__alloyId5422 = Ti.UI.createView({
        id: "__alloyId5422"
    });
    $.__views.__alloyId5422 && $.addTopLevelView($.__views.__alloyId5422);
    $.__views.__alloyId5423 = Ti.UI.createView({
        id: "__alloyId5423"
    });
    $.__views.__alloyId5422.add($.__views.__alloyId5423);
    $.__views.__alloyId5424 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5424"
    });
    $.__views.__alloyId5423.add($.__views.__alloyId5424);
    $.__views.__alloyId5425 = Ti.UI.createView({
        id: "__alloyId5425"
    });
    $.__views.__alloyId5425 && $.addTopLevelView($.__views.__alloyId5425);
    $.__views.__alloyId5426 = Ti.UI.createView({
        id: "__alloyId5426"
    });
    $.__views.__alloyId5425.add($.__views.__alloyId5426);
    $.__views.__alloyId5427 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5427"
    });
    $.__views.__alloyId5426.add($.__views.__alloyId5427);
    $.__views.__alloyId5428 = Ti.UI.createView({
        id: "__alloyId5428"
    });
    $.__views.__alloyId5428 && $.addTopLevelView($.__views.__alloyId5428);
    $.__views.__alloyId5429 = Ti.UI.createView({
        id: "__alloyId5429"
    });
    $.__views.__alloyId5428.add($.__views.__alloyId5429);
    $.__views.__alloyId5430 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5430"
    });
    $.__views.__alloyId5429.add($.__views.__alloyId5430);
    $.__views.__alloyId5431 = Ti.UI.createView({
        id: "__alloyId5431"
    });
    $.__views.__alloyId5431 && $.addTopLevelView($.__views.__alloyId5431);
    $.__views.__alloyId5432 = Ti.UI.createView({
        id: "__alloyId5432"
    });
    $.__views.__alloyId5431.add($.__views.__alloyId5432);
    $.__views.__alloyId5433 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5433"
    });
    $.__views.__alloyId5432.add($.__views.__alloyId5433);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;