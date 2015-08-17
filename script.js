walk(document.body);

function walk(node)  
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1: 
		case 9:  
		case 11: 
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling; 
				walk(child);
				child = next;
			}
			break;

		case 3: 
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/Путіним/g, "Хуйлом");
	v = v.replace(/Путіну/g, "Хуйлу");
	v = v.replace(/Путіна/g, "Хуйла");
	v = v.replace(/Путін/g, "Хуйло");

	v = v.replace(/Путине/g, "Хуйле");
	v = v.replace(/Путиным/g, "Хуйлом");
	v = v.replace(/Путину/g, "Хуйлу");
	v = v.replace(/Путина/g, "Хуйла");
	v = v.replace(/Путин/g, "Хуйло");
	
	v = v.replace(/Putin/g, "Khuilo");

	textNode.nodeValue = v;
}