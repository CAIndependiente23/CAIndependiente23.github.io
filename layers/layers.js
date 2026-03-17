var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_PadrnRP_1 = new ol.format.GeoJSON();
var features_PadrnRP_1 = format_PadrnRP_1.readFeatures(json_PadrnRP_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PadrnRP_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PadrnRP_1.addFeatures(features_PadrnRP_1);
var lyr_PadrnRP_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PadrnRP_1, 
                style: style_PadrnRP_1,
                popuplayertitle: 'Padrón RP',
                interactive: true,
                title: '<img src="styles/legend/PadrnRP_1.png" /> Padrón RP'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_PadrnRP_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_PadrnRP_1];
lyr_PadrnRP_1.set('fieldAliases', {'fid': 'fid', 'N�RP': 'N�RP', 'begin': 'begin', 'end': 'end', 'Datos_N�': 'Datos_N�', 'Datos_Zona': 'Datos_Zona', 'Datos_CALLE': 'Datos_CALLE', 'Datos_Altura': 'Datos_Altura', 'Datos_INICIO': 'Datos_INICIO', 'Datos_FIN': 'Datos_FIN', 'Datos_MANO': 'Datos_MANO', 'Datos_COM': 'Datos_COM', 'Datos_L(m)': 'Datos_L(m)', 'Datos_A (m)': 'Datos_A (m)', 'Datos_Observaciones': 'Datos_Observaciones', 'Datos_C1': 'Datos_C1', 'Datos_C2': 'Datos_C2', 'Datos_Fecha de limpieza': 'Datos_Fecha de limpieza', 'Datos_Fecha de verificaci�n': 'Datos_Fecha de verificaci�n', 'Datos_Foto': 'Datos_Foto', });
lyr_PadrnRP_1.set('fieldImages', {'fid': 'TextEdit', 'N�RP': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'Datos_N�': 'Range', 'Datos_Zona': 'TextEdit', 'Datos_CALLE': 'TextEdit', 'Datos_Altura': 'TextEdit', 'Datos_INICIO': 'TextEdit', 'Datos_FIN': 'TextEdit', 'Datos_MANO': 'TextEdit', 'Datos_COM': 'Range', 'Datos_L(m)': 'TextEdit', 'Datos_A (m)': 'TextEdit', 'Datos_Observaciones': 'TextEdit', 'Datos_C1': '', 'Datos_C2': '', 'Datos_Fecha de limpieza': 'TextEdit', 'Datos_Fecha de verificaci�n': 'TextEdit', 'Datos_Foto': 'TextEdit', });
lyr_PadrnRP_1.set('fieldLabels', {'fid': 'no label', 'N�RP': 'no label', 'begin': 'no label', 'end': 'no label', 'Datos_N�': 'no label', 'Datos_Zona': 'no label', 'Datos_CALLE': 'no label', 'Datos_Altura': 'no label', 'Datos_INICIO': 'no label', 'Datos_FIN': 'no label', 'Datos_MANO': 'no label', 'Datos_COM': 'no label', 'Datos_L(m)': 'no label', 'Datos_A (m)': 'no label', 'Datos_Observaciones': 'no label', 'Datos_C1': 'no label', 'Datos_C2': 'no label', 'Datos_Fecha de limpieza': 'no label', 'Datos_Fecha de verificaci�n': 'no label', 'Datos_Foto': 'no label', });
lyr_PadrnRP_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});