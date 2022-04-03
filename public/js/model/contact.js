export default class Contact {
    id;
    name;
    phone;
    address;

    constructor(id, name, phone, address) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.address = address;
    }

    //HTML Builder for contact content
    buildContact(){
        var html = '';
        html += `<div class="avatar p-4">
                <div class="w-24 mask mask-hexagon">
                    <img src="https://ui-avatars.com/api/?name=`+this.name+`" />
                </div>
                </div>`;
        html += '<p>Name: '+this.name+'</p>';
        html += '<p>Phone: '+this.phone+'</p>';
        html += '<p>Address: '+this.address+'</p>';

        return html;
    }

    //HTML Builder for a contact
    buildContactSingle(){
        var html = '';
            html += '<div class="grid grid-flow-col ">';
            html += '<div class="col-span-2">';
            html += '<button data-id="'+ this.id +'" class="btn-contact btn btn-ghost py-2 inline-block text-left btn-wide" style="width: -webkit-fill-available;">';
            html += '<div ">' + this.name + '</div>';
            html += '</button>';
            html += '</div>';
            html += '<div class="text-right">';
            html += '<label class="justify-items-end">';
            html += '<div class="menu-open btn btn-ghost fill-current text-right"><i class="fa-solid fa-ellipsis-vertical"></i></div>';
            html += '<div class="list-menu fill-current text-right hidden">';
            html += '<div data-id="'+ this.id +'" class="btn btn-ghost btn-edit"><i class="fa-solid fa-pen-to-square"></i></div>';
            html += '<div data-id="'+ this.id +'" data-toggle="open-modal" data-target="#modalDeleteContact" class="btn btn-ghost btn-delete"><i class="fa-solid fa-trash-alt"></i></div>';
            html += '<div class="menu-close btn btn-ghost"><i class="fa-solid fa-xmark"></i></div>';
            html += '</div>';
            html += '</label>';
            html += '</div>';
            html += '</div>';
        return html;
    }
    
}