function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_167";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_167 = Ti.UI.createView({
        id: "widget_167"
    });
    $.__views.widget_167 && $.addTopLevelView($.__views.widget_167);
    $.__views.__alloyId2002 = Ti.UI.createView({
        id: "__alloyId2002"
    });
    $.__views.widget_167.add($.__views.__alloyId2002);
    $.__views.__alloyId2003 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2003"
    });
    $.__views.__alloyId2002.add($.__views.__alloyId2003);
    $.__views.__alloyId2004 = Ti.UI.createView({
        id: "__alloyId2004"
    });
    $.__views.__alloyId2004 && $.addTopLevelView($.__views.__alloyId2004);
    $.__views.__alloyId2005 = Ti.UI.createView({
        id: "__alloyId2005"
    });
    $.__views.__alloyId2004.add($.__views.__alloyId2005);
    $.__views.__alloyId2006 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2006"
    });
    $.__views.__alloyId2005.add($.__views.__alloyId2006);
    $.__views.__alloyId2007 = Ti.UI.createView({
        id: "__alloyId2007"
    });
    $.__views.__alloyId2007 && $.addTopLevelView($.__views.__alloyId2007);
    $.__views.__alloyId2008 = Ti.UI.createView({
        id: "__alloyId2008"
    });
    $.__views.__alloyId2007.add($.__views.__alloyId2008);
    $.__views.__alloyId2009 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2009"
    });
    $.__views.__alloyId2008.add($.__views.__alloyId2009);
    $.__views.__alloyId2010 = Ti.UI.createView({
        id: "__alloyId2010"
    });
    $.__views.__alloyId2010 && $.addTopLevelView($.__views.__alloyId2010);
    $.__views.__alloyId2011 = Ti.UI.createView({
        id: "__alloyId2011"
    });
    $.__views.__alloyId2010.add($.__views.__alloyId2011);
    $.__views.__alloyId2012 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2012"
    });
    $.__views.__alloyId2011.add($.__views.__alloyId2012);
    $.__views.__alloyId2013 = Ti.UI.createView({
        id: "__alloyId2013"
    });
    $.__views.__alloyId2013 && $.addTopLevelView($.__views.__alloyId2013);
    $.__views.__alloyId2014 = Ti.UI.createView({
        id: "__alloyId2014"
    });
    $.__views.__alloyId2013.add($.__views.__alloyId2014);
    $.__views.__alloyId2015 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2015"
    });
    $.__views.__alloyId2014.add($.__views.__alloyId2015);
    $.__views.__alloyId2016 = Ti.UI.createView({
        id: "__alloyId2016"
    });
    $.__views.__alloyId2016 && $.addTopLevelView($.__views.__alloyId2016);
    $.__views.__alloyId2017 = Ti.UI.createView({
        id: "__alloyId2017"
    });
    $.__views.__alloyId2016.add($.__views.__alloyId2017);
    $.__views.__alloyId2018 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2018"
    });
    $.__views.__alloyId2017.add($.__views.__alloyId2018);
    $.__views.__alloyId2019 = Ti.UI.createView({
        id: "__alloyId2019"
    });
    $.__views.__alloyId2019 && $.addTopLevelView($.__views.__alloyId2019);
    $.__views.__alloyId2020 = Ti.UI.createView({
        id: "__alloyId2020"
    });
    $.__views.__alloyId2019.add($.__views.__alloyId2020);
    $.__views.__alloyId2021 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2021"
    });
    $.__views.__alloyId2020.add($.__views.__alloyId2021);
    $.__views.__alloyId2022 = Ti.UI.createView({
        id: "__alloyId2022"
    });
    $.__views.__alloyId2022 && $.addTopLevelView($.__views.__alloyId2022);
    $.__views.__alloyId2023 = Ti.UI.createView({
        id: "__alloyId2023"
    });
    $.__views.__alloyId2022.add($.__views.__alloyId2023);
    $.__views.__alloyId2024 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2024"
    });
    $.__views.__alloyId2023.add($.__views.__alloyId2024);
    $.__views.__alloyId2025 = Ti.UI.createView({
        id: "__alloyId2025"
    });
    $.__views.__alloyId2025 && $.addTopLevelView($.__views.__alloyId2025);
    $.__views.__alloyId2026 = Ti.UI.createView({
        id: "__alloyId2026"
    });
    $.__views.__alloyId2025.add($.__views.__alloyId2026);
    $.__views.__alloyId2027 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2027"
    });
    $.__views.__alloyId2026.add($.__views.__alloyId2027);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;