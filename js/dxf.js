/**
 * Created by vitaliy on 1/27/17.
 */

DxfExporter = {
    file: [],
    reset: function () {
        DxfExporter.clean();
        DxfExporter.file.push(0);
        DxfExporter.file.push("SECTION");
        DxfExporter.file.push(2);
        DxfExporter.file.push("HEADER");
        DxfExporter.file.push(9);
        DxfExporter.file.push("$INSUNITS");
        DxfExporter.file.push(70);
        DxfExporter.file.push(4);
        DxfExporter.file.push(0);
        DxfExporter.file.push("ENDSEC");
        DxfExporter.file.push(0);
        DxfExporter.file.push("SECTION");
        DxfExporter.file.push(2);
        DxfExporter.file.push("ENTITIES");
    },

    exportShape: function (path, offsetX, offsetY) {
        var from;
        var to;
        for (var i = 0; i < path.length - 1; i++) {
            from = {x: path[i]['2d_x'] + offsetX, y: path[i]['2d_y'] + offsetY};
            to = {x: path[i + 1]['2d_x'] + offsetX, y: path[i + 1]['2d_y'] + offsetY};
            DxfExporter.addLine(from, to);
        }
    },

    addCircle: function (point, radius) {
        var shape = [];
        shape.push(0);
        shape.push("CIRCLE");
        shape.push(8);
        shape.push(0);
        shape.push(10);
        shape.push(point.x);
        shape.push(20);
        shape.push(point.y);
        shape.push(40);
        shape.push(radius);
        DxfExporter.file.push(shape.join("\n"));
    },

    addLine: function (from, to) {
        var shape = [];
        shape.push(0);
        shape.push("LINE");
        shape.push(8);
        shape.push(0);
        shape.push(10);
        shape.push(from.x);
        shape.push(20);
        shape.push(from.y);
        shape.push(11);
        shape.push(to.x);
        shape.push(21);
        shape.push(to.y);
        DxfExporter.file.push(shape.join("\n"));
    },

    addArc: function (center, radius, startAngle, endAngle) {
        var shape = [];

        shape.push(0);
        shape.push("ARC");
        shape.push(8);
        shape.push(0);
        shape.push(10);
        shape.push(center.x);
        shape.push(20);
        shape.push(center.y);
        shape.push(40);
        shape.push(radius);
        shape.push(50);
        shape.push(startAngle);
        shape.push(51);
        shape.push(endAngle);
        DxfExporter.file.push(shape.join("\n"));
    },

    clean: function () {
        DxfExporter.file = [];
    },

    export: function () {
        DxfExporter.file.push(0);
        DxfExporter.file.push("ENDSEC");
        DxfExporter.file.push(0);
        DxfExporter.file.push("EOF");

        return DxfExporter.file.join("\n");
    }

};