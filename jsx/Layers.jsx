//INK
// Licence: GPL <http://www.gnu.org/licenses/gpl.html>
//------------------------------------------------------------------------------
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
// 
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
// 
// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.
//------------------------------------------------------------------------------

var Layers = {

	/*
	 * Creates a text field and set text formatting
	 */
	createText : function( font, size, color, content, x, y, justification, layerName )
	{
		/*
		//create empty text layer
		var desc  = new ActionDescriptor();  
	    var desc2 = new ActionDescriptor();  
	    var ref   = new ActionReference();  
	    ref.putClass(app.charIDToTypeID('TxLr'));  
	    desc.putReference(app.charIDToTypeID('null'), ref);  
	    desc2.putString(app.charIDToTypeID('Txt '), "text");  
	    var list2 = new ActionList();  
	    desc2.putList(app.charIDToTypeID('Txtt'), list2);  
	    desc.putObject(app.charIDToTypeID('Usng'), app.charIDToTypeID('TxLr'), desc2);  
	    executeAction(app.charIDToTypeID('Mk  '), desc, DialogModes.NO);  
	    */

	    //having some troubles generating text fields
		//with the js interface, so, this basically creates
		//and empty text field at [0,0]
		///////////////////////////////////////////////////
		var idMk = charIDToTypeID( "Mk  " );
	    var desc3 = new ActionDescriptor();
	    var idnull = charIDToTypeID( "null" );
	    var ref2 = new ActionReference();
	    var idTxLr = charIDToTypeID( "TxLr" );
	    ref2.putClass( idTxLr );
	    desc3.putReference( idnull, ref2 );
	    var idUsng = charIDToTypeID( "Usng" );
	    var desc4 = new ActionDescriptor();
	    var idTxt = charIDToTypeID( "Txt " );
	    desc4.putString( idTxt, """""" );
	    var idwarp = stringIDToTypeID( "warp" );
	    var desc5 = new ActionDescriptor();
	    var idwarpStyle = stringIDToTypeID( "warpStyle" );
	    var idwarpStyle = stringIDToTypeID( "warpStyle" );
	    var idwarpNone = stringIDToTypeID( "warpNone" );
	    desc5.putEnumerated( idwarpStyle, idwarpStyle, idwarpNone );
	    var idwarpValue = stringIDToTypeID( "warpValue" );
	    desc5.putDouble( idwarpValue, 0.000000 );
	    var idwarpPerspective = stringIDToTypeID( "warpPerspective" );
	    desc5.putDouble( idwarpPerspective, 0.000000 );
	    var idwarpPerspectiveOther = stringIDToTypeID( "warpPerspectiveOther" );
	    desc5.putDouble( idwarpPerspectiveOther, 0.000000 );
	    var idwarpRotate = stringIDToTypeID( "warpRotate" );
	    var idOrnt = charIDToTypeID( "Ornt" );
	    var idHrzn = charIDToTypeID( "Hrzn" );
	    desc5.putEnumerated( idwarpRotate, idOrnt, idHrzn );
	    var idwarp = stringIDToTypeID( "warp" );
	    desc4.putObject( idwarp, idwarp, desc5 );
	    var idTxtC = charIDToTypeID( "TxtC" );
	    var desc6 = new ActionDescriptor();
	    var idHrzn = charIDToTypeID( "Hrzn" );
	    var idPrc = charIDToTypeID( "#Prc" );
	    desc6.putUnitDouble( idHrzn, idPrc, 0.000000 );
	    var idVrtc = charIDToTypeID( "Vrtc" );
	    var idPrc = charIDToTypeID( "#Prc" );
	    desc6.putUnitDouble( idVrtc, idPrc, 0.000000 );
	    var idPnt = charIDToTypeID( "Pnt " );
	    desc4.putObject( idTxtC, idPnt, desc6 );
	    var idtextGridding = stringIDToTypeID( "textGridding" );
	    var idtextGridding = stringIDToTypeID( "textGridding" );
	    var idNone = charIDToTypeID( "None" );
	    desc4.putEnumerated( idtextGridding, idtextGridding, idNone );
	    var idOrnt = charIDToTypeID( "Ornt" );
	    var idOrnt = charIDToTypeID( "Ornt" );
	    var idHrzn = charIDToTypeID( "Hrzn" );
	    desc4.putEnumerated( idOrnt, idOrnt, idHrzn );
	    var idAntA = charIDToTypeID( "AntA" );
	    var idAnnt = charIDToTypeID( "Annt" );
	    var idAnCr = charIDToTypeID( "AnCr" );
	    desc4.putEnumerated( idAntA, idAnnt, idAnCr );
	    var idbounds = stringIDToTypeID( "bounds" );
	    var desc7 = new ActionDescriptor();
	    var idLeft = charIDToTypeID( "Left" );
	    var idPxl = charIDToTypeID( "#Pxl" );
	    desc7.putUnitDouble( idLeft, idPxl, 0.000000 );
	    var idTop = charIDToTypeID( "Top " );
	    var idPxl = charIDToTypeID( "#Pxl" );
	    desc7.putUnitDouble( idTop, idPxl, 0.000000 );
	    var idRght = charIDToTypeID( "Rght" );
	    var idPxl = charIDToTypeID( "#Pxl" );
	    desc7.putUnitDouble( idRght, idPxl, 0.000000 );
	    var idBtom = charIDToTypeID( "Btom" );
	    var idPxl = charIDToTypeID( "#Pxl" );
	    desc7.putUnitDouble( idBtom, idPxl, 0.000000 );
	    var idbounds = stringIDToTypeID( "bounds" );
	    desc4.putObject( idbounds, idbounds, desc7 );
	    var idboundingBox = stringIDToTypeID( "boundingBox" );
	    var desc8 = new ActionDescriptor();
	    var idLeft = charIDToTypeID( "Left" );
	    var idPxl = charIDToTypeID( "#Pxl" );
	    desc8.putUnitDouble( idLeft, idPxl, 0.000000 );
	    var idTop = charIDToTypeID( "Top " );
	    var idPxl = charIDToTypeID( "#Pxl" );
	    desc8.putUnitDouble( idTop, idPxl, 0.000000 );
	    var idRght = charIDToTypeID( "Rght" );
	    var idPxl = charIDToTypeID( "#Pxl" );
	    desc8.putUnitDouble( idRght, idPxl, 0.000000 );
	    var idBtom = charIDToTypeID( "Btom" );
	    var idPxl = charIDToTypeID( "#Pxl" );
	    desc8.putUnitDouble( idBtom, idPxl, -1.000000 );
	    var idboundingBox = stringIDToTypeID( "boundingBox" );
	    desc4.putObject( idboundingBox, idboundingBox, desc8 );
	    var idtextShape = stringIDToTypeID( "textShape" );
	    var list1 = new ActionList();
	    var desc9 = new ActionDescriptor();
	    var idTEXT = charIDToTypeID( "TEXT" );
	    var idTEXT = charIDToTypeID( "TEXT" );
	    var idPnt = charIDToTypeID( "Pnt " );
	    desc9.putEnumerated( idTEXT, idTEXT, idPnt );
	    var idOrnt = charIDToTypeID( "Ornt" );
	    var idOrnt = charIDToTypeID( "Ornt" );
	    var idHrzn = charIDToTypeID( "Hrzn" );
	    desc9.putEnumerated( idOrnt, idOrnt, idHrzn );
	    var idTrnf = charIDToTypeID( "Trnf" );
	    var desc10 = new ActionDescriptor();
	    var idxx = stringIDToTypeID( "xx" );
	    desc10.putDouble( idxx, 1.000000 );
	    var idxy = stringIDToTypeID( "xy" );
	    desc10.putDouble( idxy, 0.000000 );
	    var idyx = stringIDToTypeID( "yx" );
	    desc10.putDouble( idyx, 0.000000 );
	    var idyy = stringIDToTypeID( "yy" );
	    desc10.putDouble( idyy, 1.000000 );
	    var idtx = stringIDToTypeID( "tx" );
	    desc10.putDouble( idtx, 0.000000 );
	    var idty = stringIDToTypeID( "ty" );
	    desc10.putDouble( idty, 0.000000 );
	    var idTrnf = charIDToTypeID( "Trnf" );
	    desc9.putObject( idTrnf, idTrnf, desc10 );
	    var idrowCount = stringIDToTypeID( "rowCount" );
	    desc9.putInteger( idrowCount, 1 );
	    var idcolumnCount = stringIDToTypeID( "columnCount" );
	    desc9.putInteger( idcolumnCount, 1 );
	    var idrowMajorOrder = stringIDToTypeID( "rowMajorOrder" );
	    desc9.putBoolean( idrowMajorOrder, true );
	    var idrowGutter = stringIDToTypeID( "rowGutter" );
	    var idPxl = charIDToTypeID( "#Pxl" );
	    desc9.putUnitDouble( idrowGutter, idPxl, 0.000000 );
	    var idcolumnGutter = stringIDToTypeID( "columnGutter" );
	    var idPxl = charIDToTypeID( "#Pxl" );
	    desc9.putUnitDouble( idcolumnGutter, idPxl, 0.000000 );
	    var idSpcn = charIDToTypeID( "Spcn" );
	    var idPxl = charIDToTypeID( "#Pxl" );
	    desc9.putUnitDouble( idSpcn, idPxl, 0.000000 );
	    var idframeBaselineAlignment = stringIDToTypeID( "frameBaselineAlignment" );
	    var idframeBaselineAlignment = stringIDToTypeID( "frameBaselineAlignment" );
	    var idalignByAscent = stringIDToTypeID( "alignByAscent" );
	    desc9.putEnumerated( idframeBaselineAlignment, idframeBaselineAlignment, idalignByAscent );
	    var idfirstBaselineMinimum = stringIDToTypeID( "firstBaselineMinimum" );
	    var idPxl = charIDToTypeID( "#Pxl" );
	    desc9.putUnitDouble( idfirstBaselineMinimum, idPxl, 0.000000 );
	    var idbase = stringIDToTypeID( "base" );
	    var desc11 = new ActionDescriptor();
	    var idHrzn = charIDToTypeID( "Hrzn" );
	    desc11.putDouble( idHrzn, 0.000000 );
	    var idVrtc = charIDToTypeID( "Vrtc" );
	    desc11.putDouble( idVrtc, 0.000000 );
	    var idPnt = charIDToTypeID( "Pnt " );
	    desc9.putObject( idbase, idPnt, desc11 );
	    var idtextShape = stringIDToTypeID( "textShape" );
	    list1.putObject( idtextShape, desc9 );
	    desc4.putList( idtextShape, list1 );
	    var idTxtt = charIDToTypeID( "Txtt" );
	    var list2 = new ActionList();
	    desc4.putList( idTxtt, list2 );
	    var idTxLr = charIDToTypeID( "TxLr" );
	    desc3.putObject( idUsng, idTxLr, desc4 );
	    var idLyrI = charIDToTypeID( "LyrI" );
	    desc3.putInteger( idLyrI, 199 );
	    executeAction( idMk, desc3, DialogModes.NO );
	    ///////////////////////////////////////////////////

	    //text object ref
	    var txtLyr = activeDocument.activeLayer;

	    //prepare color obj
		var textColor        = new SolidColor();
		textColor.rgb.red    = color.red;
		textColor.rgb.green  = color.green;
		textColor.rgb.blue   = color.blue;

		var textItemRef      = txtLyr.textItem;
		
		textItemRef.contents = content;
		textItemRef.font     = font;
		textItemRef.color    = textColor;
		this.changeTextSize(size);
		//textItemRef.size     = size;
		//txtLyr.textItem.kind = TextType.PARAGRAPHTEXT;  
		textItemRef.justification = justification;
		activeDocument.activeLayer.name = layerName;
		textItemRef.position = new Array(x, y);
	},

	/*
	 * temp fix for setting textItem.size
	 * https://forums.adobe.com/message/6805704#6805704
	 */
	changeTextSize : function(size) 
	{  
	    var idsetd = charIDToTypeID( "setd" );  
	    var desc23 = new ActionDescriptor();  
	    var idnull = charIDToTypeID( "null" );  
	    var ref6 = new ActionReference();  
	    var idPrpr = charIDToTypeID( "Prpr" );  
	    var idTxtS = charIDToTypeID( "TxtS" );  
	    ref6.putProperty( idPrpr, idTxtS );  
	    var idTxLr = charIDToTypeID( "TxLr" );  
	    var idOrdn = charIDToTypeID( "Ordn" );  
	    var idTrgt = charIDToTypeID( "Trgt" );  
	    ref6.putEnumerated( idTxLr, idOrdn, idTrgt );  
		desc23.putReference( idnull, ref6 );  
		var idT = charIDToTypeID( "T   " );  
	    var desc24 = new ActionDescriptor();  
	    var idtextOverrideFeatureName = stringIDToTypeID( "textOverrideFeatureName" );  
	    desc24.putInteger( idtextOverrideFeatureName, 808465458 );  
	    var idtypeStyleOperationType = stringIDToTypeID( "typeStyleOperationType" );  
	    desc24.putInteger( idtypeStyleOperationType, 3 );  
	    var idSz = charIDToTypeID( "Sz  " );  
	    var idPxl = charIDToTypeID( "#Pxl" );  
	    desc24.putUnitDouble( idSz, idPxl, size );  
	    var idTxtS = charIDToTypeID( "TxtS" );  
	    desc23.putObject( idT, idTxtS, desc24 );  
	    executeAction( idsetd, desc23, DialogModes.NO );  
	},


	/*
	 * Disable all effects for active layer
	 */
	disableAllLayerFX : function() 
	{
		var idsetd = charIDToTypeID( "setd" );
	    var desc6 = new ActionDescriptor();
	    var idnull = charIDToTypeID( "null" );
	    var ref5 = new ActionReference();
	    var idPrpr = charIDToTypeID( "Prpr" );
	    var idlfxv = charIDToTypeID( "lfxv" );
	    ref5.putProperty( idPrpr, idlfxv );
	    var idDcmn = charIDToTypeID( "Dcmn" );
	    var idOrdn = charIDToTypeID( "Ordn" );
	    var idTrgt = charIDToTypeID( "Trgt" );
	    ref5.putEnumerated( idDcmn, idOrdn, idTrgt );
	    desc6.putReference( idnull, ref5 );
	    var idT = charIDToTypeID( "T   " );
	    var desc7 = new ActionDescriptor();
	    var idlfxv = charIDToTypeID( "lfxv" );
	    desc7.putBoolean( idlfxv, false );
	    var idlfxv = charIDToTypeID( "lfxv" );
	    desc6.putObject( idT, idlfxv, desc7 );
		executeAction( idsetd, desc6, DialogModes.NO );
	},


	/*
	 * Enable all effects for active layer
	 */
	enableAllLayerFX : function() 
	{
		var idsetd = charIDToTypeID( "setd" );
		var desc8 = new ActionDescriptor();
		var idnull = charIDToTypeID( "null" );
	    var ref6 = new ActionReference();
	    var idPrpr = charIDToTypeID( "Prpr" );
	    var idlfxv = charIDToTypeID( "lfxv" );
	    ref6.putProperty( idPrpr, idlfxv );
	    var idDcmn = charIDToTypeID( "Dcmn" );
	    var idOrdn = charIDToTypeID( "Ordn" );
	    var idTrgt = charIDToTypeID( "Trgt" );
	    ref6.putEnumerated( idDcmn, idOrdn, idTrgt );
		desc8.putReference( idnull, ref6 );
		var idT = charIDToTypeID( "T   " );
	    var desc9 = new ActionDescriptor();
	    var idlfxv = charIDToTypeID( "lfxv" );
	    desc9.putBoolean( idlfxv, true );
		var idlfxv = charIDToTypeID( "lfxv" );
		desc8.putObject( idT, idlfxv, desc9 );
		executeAction( idsetd, desc8, DialogModes.NO );
	},


	getABLayerInfo : function()
	{
	    var abArr = [];
        var ref = new ActionReference(); 
        ref.putEnumerated( charIDToTypeID('Dcmn'), charIDToTypeID('Ordn'), charIDToTypeID('Trgt') ); 
        var count = executeActionGet(ref).getInteger(charIDToTypeID('NmbL')) +1;   //  number of total layers in the document including start AND stop of groups.  So layersets get counted twice. 
        var infoList=[];
        try{ activeDocument.backgroundLayer;  var i = 0; }catch(e){ var i = 1; }; 
	    
	    for(i;i<count;i++)
	    {    
	        ref = new ActionReference(); 
	        ref.putIndex( charIDToTypeID( 'Lyr ' ), i );
	        var desc = executeActionGet(ref);
	        // this gets the layer name 
	        var layerName  = desc.getString(charIDToTypeID( 'Nm  ' ));
	        if(layerName.match(/^<\/Layer group/) ) continue;  // removes "/Layer Groups" from the listed output.   (like if ID = "/Layer Group" then skip)         
	        var name       = layerName;
	        var id         = desc.getInteger(stringIDToTypeID( 'layerID' ));
	        var index      = desc.getInteger(charIDToTypeID( 'ItmI' ));
	        var layerType  = typeIDToStringID(desc.getEnumerationValue( stringIDToTypeID( 'layerSection' )));       
	        var isLayerSet = ( layerType == 'layerSectionContent') ? false:true;
	        var visible    = desc.getBoolean(charIDToTypeID('Vsbl'));
	        if (isLayerSet)
	        {
	                var artBoardLay    = {};
	                artBoardLay.result = false; 
	                var ab_actDesc     = desc.getObjectValue(stringIDToTypeID('artboard'));
	                var abrect_desc    = ab_actDesc.getObjectValue(stringIDToTypeID('artboardRect'));
	                
	                // get bounds of artboard. 
	                atop    = parseInt(abrect_desc.getUnitDoubleValue(charIDToTypeID('Top ')))
	                aleft   = parseInt(abrect_desc.getUnitDoubleValue(charIDToTypeID('Left')));
	                abottom = parseInt(abrect_desc.getUnitDoubleValue(charIDToTypeID('Btom')));
	                aright  = parseInt(abrect_desc.getUnitDoubleValue(charIDToTypeID('Rght')));
	                
	                // add the 4 values together, and if they are 0  then I know its not an actual artboard. 
	                var checVal = (atop+aleft+abottom+aright);
	                if (checVal != 0) 
	                {
	                    artBoardLay.result = true;
	                    artBoardLay.name   = name;
	                    artBoardLay.top    = atop;
	                    artBoardLay.left   = aleft;
	                    artBoardLay.bottom = abottom;
	                    artBoardLay.right  = aright;
	                    artBoardLay.AMid   = id;
	                    artBoardLay.index  = index;
	                    abArr.push(artBoardLay); 
	                }
	           }
	   };
	   return abArr;
	},


	/*
	 * returns active artboard reference
	 */
	getActiveParentArtboard : function()
	{
		var doc         = activeDocument;
		var activeLayer = doc.activeLayer;
		var alp         = activeLayer.parent;
		var key         = false;
		var abInfo      = { ref:undefined, top:0, left:0, right:0, bottom:0, width:0, height:0 }; 

		try 
		{  
	        while (!key) 
	        {  
	            doc.activeLayer = alp;  
	            var ref = new ActionReference();  
	            ref.putEnumerated(charIDToTypeID('Lyr '), charIDToTypeID('Ordn'), charIDToTypeID('Trgt'));  
	            key = executeActionGet(ref).getBoolean(stringIDToTypeID("artboardEnabled"));  
	            if (key) 
	            {
	            	var ref = new ActionReference();
					ref.putEnumerated( charIDToTypeID( "Lyr " ), charIDToTypeID( "Ordn" ), charIDToTypeID( "Trgt" ) );
					
					var abRect     = executeActionGet(ref).getObjectValue(stringIDToTypeID("artboard")).getObjectValue(stringIDToTypeID("artboardRect"));
					var abL        = abRect.getDouble(stringIDToTypeID("left"));
					var abR        = abRect.getDouble(stringIDToTypeID("right"));
					var abT        = abRect.getDouble(stringIDToTypeID("top"));
					var abB        = abRect.getDouble(stringIDToTypeID("bottom"));
					var abW        = abR - abL;
					var abH        = abB - abT;
					abInfo.ref     = alp;
					abInfo.left    = abL;
					abInfo.right   = abR;
					abInfo.bottom  = abB;
					abInfo.top     = abT;
					abInfo.width   = abW;
					abInfo.height  = abH;

	            	//re-select originally selected layer.
	            	doc.activeLayer = activeLayer;  
	                return abInfo;  
	            }  
	            alp = alp.parent;  
	        }  
	    } catch (e) {  
	        //layer without artboard, or artboard itself.
	        //if ( this.getABLayerInfo().length <= 1 )
	        //{
        	abInfo.ref     = doc;
			abInfo.left    = 0;
			abInfo.right   = doc.width;
			abInfo.bottom  = doc.height;
			abInfo.top     = 0;
			abInfo.width   = doc.width;
			abInfo.height  = doc.height;

			//re-select originally selected layer.
	        doc.activeLayer = activeLayer;  

	        return abInfo; 
	        //}	
	    }
	},


	/*
	 * Check if a layer has no graphics in it
	 * If empty, returns true.
	 */
	isEmpty : function( ref ) 
	{
		var isEmpty = false;
		if ( Number(ref.bounds[0]) == 0 && Number(ref.bounds[1]) == 0 && Number(ref.bounds[2]) == 0 && Number(ref.bounds[3]) == 0)
		{
			isEmpty = true;
		}
		else
		{
			isEmpty = false;
		}
		return isEmpty;
	},


	/*
	 * set active layer by layer id
	 */
	selectLayerByID : function( index, add )
	{
		add == undefined ? add = false : add = true;
		var ref = new ActionReference();
		ref.putIndex(charIDToTypeID("Lyr "), index );
		var desc = new ActionDescriptor();
		desc.putReference(charIDToTypeID( "null" ), ref );

		if ( add ) desc.putEnumerated( stringIDToTypeID( "selectionModifier" ), stringIDToTypeID( "selectionModifierType" ), stringIDToTypeID( "selection" ) );
		desc.putBoolean( charIDToTypeID( "MkVs" ), false );
		try
		{
			executeAction( charIDToTypeID( "slct" ), desc, DialogModes.NO );
		}
		catch(e)
		{
			//error selecting this layer?? 
		}
	},

	/*
	 * deselect all active layers
	 */
	deselectAllLayers : function()
	{  
    	var desc01 = new ActionDescriptor();   
        var ref01 = new ActionReference();   
        ref01.putEnumerated( charIDToTypeID('Lyr '), charIDToTypeID('Ordn'), charIDToTypeID('Trgt') );   
        desc01.putReference( charIDToTypeID('null'), ref01 );   
        executeAction( stringIDToTypeID('selectNoLayers'), desc01, DialogModes.NO ); 
	}
};