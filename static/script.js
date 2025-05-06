// DWARF Tag mappings
const DWARF_TAGS = {
    0x01: "DW_TAG_array_type",
    0x02: "DW_TAG_class_type",
    0x03: "DW_TAG_entry_point",
    0x04: "DW_TAG_enumeration_type",
    0x05: "DW_TAG_formal_parameter",
    0x08: "DW_TAG_imported_declaration",
    0x0a: "DW_TAG_label",
    0x0b: "DW_TAG_lexical_block",
    0x0d: "DW_TAG_member",
    0x0f: "DW_TAG_pointer_type",
    0x10: "DW_TAG_reference_type",
    0x11: "DW_TAG_compile_unit",
    0x12: "DW_TAG_string_type",
    0x13: "DW_TAG_structure_type",
    0x15: "DW_TAG_subroutine_type",
    0x16: "DW_TAG_typedef",
    0x17: "DW_TAG_union_type",
    0x18: "DW_TAG_unspecified_parameters",
    0x19: "DW_TAG_variant",
    0x1a: "DW_TAG_common_block",
    0x1b: "DW_TAG_common_inclusion",
    0x1c: "DW_TAG_inheritance",
    0x1d: "DW_TAG_inlined_subroutine",
    0x1e: "DW_TAG_module",
    0x1f: "DW_TAG_ptr_to_member_type",
    0x20: "DW_TAG_set_type",
    0x21: "DW_TAG_subrange_type",
    0x22: "DW_TAG_with_stmt",
    0x23: "DW_TAG_access_declaration",
    0x24: "DW_TAG_base_type",
    0x25: "DW_TAG_catch_block",
    0x26: "DW_TAG_const_type",
    0x27: "DW_TAG_constant",
    0x28: "DW_TAG_enumerator",
    0x29: "DW_TAG_file_type",
    0x2a: "DW_TAG_friend",
    0x2b: "DW_TAG_namelist",
    0x2c: "DW_TAG_namelist_item",
    0x2d: "DW_TAG_packed_type",
    0x2e: "DW_TAG_subprogram",
    0x2f: "DW_TAG_template_type_parameter",
    0x30: "DW_TAG_template_value_parameter",
    0x31: "DW_TAG_thrown_type",
    0x32: "DW_TAG_try_block",
    0x33: "DW_TAG_variant_part",
    0x34: "DW_TAG_variable",
    0x35: "DW_TAG_volatile_type",
    0x36: "DW_TAG_dwarf_procedure",
    0x37: "DW_TAG_restrict_type",
    0x38: "DW_TAG_interface_type",
    0x39: "DW_TAG_namespace",
    0x3a: "DW_TAG_imported_module",
    0x3b: "DW_TAG_unspecified_type",
    0x3c: "DW_TAG_partial_unit",
    0x3d: "DW_TAG_imported_unit",
    0x3f: "DW_TAG_condition",
    0x40: "DW_TAG_shared_type",
    0x41: "DW_TAG_type_unit",
    0x42: "DW_TAG_rvalue_reference_type",
    0x43: "DW_TAG_template_alias"
};

// DWARF Attribute mappings
const DWARF_ATTRS = {
    0x01: "DW_AT_sibling",
    0x02: "DW_AT_location",
    0x03: "DW_AT_name",
    0x09: "DW_AT_ordering",
    0x0b: "DW_AT_byte_size",
    0x0c: "DW_AT_bit_size",
    0x0d: "DW_AT_stmt_list",
    0x0f: "DW_AT_low_pc",
    0x11: "DW_AT_high_pc",
    0x12: "DW_AT_language",
    0x15: "DW_AT_discr",
    0x16: "DW_AT_discr_value",
    0x17: "DW_AT_visibility",
    0x18: "DW_AT_import",
    0x19: "DW_AT_string_length",
    0x1a: "DW_AT_common_reference",
    0x1b: "DW_AT_comp_dir",
    0x1c: "DW_AT_const_value",
    0x1d: "DW_AT_containing_type",
    0x1e: "DW_AT_default_value",
    0x20: "DW_AT_inline",
    0x21: "DW_AT_is_optional",
    0x22: "DW_AT_lower_bound",
    0x25: "DW_AT_producer",
    0x27: "DW_AT_prototyped",
    0x2a: "DW_AT_return_addr",
    0x2c: "DW_AT_start_scope",
    0x2e: "DW_AT_stride_size",
    0x2f: "DW_AT_upper_bound",
    0x31: "DW_AT_abstract_origin",
    0x32: "DW_AT_accessibility",
    0x33: "DW_AT_address_class",
    0x34: "DW_AT_artificial",
    0x35: "DW_AT_base_types",
    0x36: "DW_AT_calling_convention",
    0x37: "DW_AT_count",
    0x38: "DW_AT_data_member_location",
    0x39: "DW_AT_decl_column",
    0x3a: "DW_AT_decl_file",
    0x3b: "DW_AT_decl_line",
    0x3c: "DW_AT_declaration",
    0x3d: "DW_AT_discr_list",
    0x3e: "DW_AT_encoding",
    0x3f: "DW_AT_external",
    0x40: "DW_AT_frame_base",
    0x41: "DW_AT_friend",
    0x42: "DW_AT_identifier_case",
    0x43: "DW_AT_macro_info",
    0x44: "DW_AT_namelist_item",
    0x45: "DW_AT_priority",
    0x46: "DW_AT_segment",
    0x47: "DW_AT_specification",
    0x48: "DW_AT_static_link",
    0x49: "DW_AT_type",
    0x4a: "DW_AT_use_location",
    0x4b: "DW_AT_variable_parameter",
    0x4c: "DW_AT_virtuality",
    0x4d: "DW_AT_vtable_elem_location",
    0x4e: "DW_AT_allocated",
    0x4f: "DW_AT_associated",
    0x50: "DW_AT_data_location",
    0x51: "DW_AT_byte_stride",
    0x52: "DW_AT_entry_pc",
    0x53: "DW_AT_use_UTF8",
    0x54: "DW_AT_extension",
    0x55: "DW_AT_ranges",
    0x56: "DW_AT_trampoline",
    0x57: "DW_AT_call_column",
    0x58: "DW_AT_call_file",
    0x59: "DW_AT_call_line",
    0x5a: "DW_AT_description",
    0x5b: "DW_AT_binary_scale",
    0x5c: "DW_AT_decimal_scale",
    0x5d: "DW_AT_small",
    0x5e: "DW_AT_decimal_sign",
    0x5f: "DW_AT_digit_count",
    0x60: "DW_AT_picture_string",
    0x61: "DW_AT_mutable",
    0x62: "DW_AT_threads_scaled",
    0x63: "DW_AT_explicit",
    0x64: "DW_AT_object_pointer",
    0x65: "DW_AT_endianity",
    0x66: "DW_AT_elemental",
    0x67: "DW_AT_pure",
    0x68: "DW_AT_recursive"
};

let dies = [];
let selectedDie = null;

// Load DIEs when the page loads
window.onload = async function () {
    await loadDIEs();
};

// Load DIEs from the server
async function loadDIEs() {
    try {
        const response = await fetch('/api/dies');
        dies = await response.json();
        displayDIEs(dies);
    } catch (error) {
        console.error('Error loading DIEs:', error);
    }
}

// Search DIEs based on input
async function searchDIEs() {
    const searchInput = document.getElementById('searchInput');
    const pattern = searchInput.value.trim();

    try {
        const response = await fetch(`/api/dies/search?q=${encodeURIComponent(pattern)}`);
        const filteredDies = await response.json();
        displayDIEs(filteredDies);
    } catch (error) {
        console.error('Error searching DIEs:', error);
    }
}

// Display DIEs in the list
function displayDIEs(diesToShow) {
    const dieList = document.getElementById('dieList');
    dieList.innerHTML = '';

    diesToShow.forEach(die => {
        const dieElement = document.createElement('div');
        dieElement.className = 'die-item';
        dieElement.onclick = () => showDieDetails(die);

        // Find the name attribute if it exists
        const nameAttr = die.Entry.Field.find(field => field.Attr === 'Name');
        const name = nameAttr ? nameAttr.Val : DWARF_TAGS[die.Entry.Tag] || `Unknown Tag (${die.Entry.Tag})`;

        dieElement.textContent = name;
        dieList.appendChild(dieElement);
    });
}

// Show DIE details
function showDieDetails(die) {
    const dieDetails = document.getElementById('dieDetails');
    dieDetails.innerHTML = '';

    // Remove selected class from all items
    document.querySelectorAll('.die-item').forEach(item => {
        item.classList.remove('selected');
    });

    // Add selected class to clicked item
    const selectedItem = Array.from(document.querySelectorAll('.die-item')).find(item =>
        item.textContent === (die.Entry.Field.find(field => field.Attr === 'Name')?.Val || DWARF_TAGS[die.Entry.Tag] || `Unknown Tag (${die.Entry.Tag})`)
    );
    if (selectedItem) {
        selectedItem.classList.add('selected');
    }

    // Create details content
    const detailsContent = document.createElement('div');

    // Add tag
    const tagElement = document.createElement('h2');
    tagElement.textContent = `Tag: ${DWARF_TAGS[die.Entry.Tag] || `Unknown Tag (${die.Entry.Tag})`}`;
    detailsContent.appendChild(tagElement);

    // Add attributes
    die.Entry.Field.forEach(field => {
        const attrElement = document.createElement('div');
        attrElement.className = 'attribute';
        const attrName = DWARF_ATTRS[field.Attr] || `Unknown Attr (${field.Attr})`;
        attrElement.innerHTML = `
            <span class="attribute-name">${attrName}:</span>
            <span class="attribute-value">${field.Val}</span>
        `;
        detailsContent.appendChild(attrElement);
    });

    // Add children section if there are children
    if (die.Children && die.Children.length > 0) {
        const childrenSection = document.createElement('div');
        childrenSection.className = 'children-section';

        const childrenHeader = document.createElement('h3');
        childrenHeader.textContent = `Children (${die.Children.length})`;
        childrenSection.appendChild(childrenHeader);

        die.Children.forEach(child => {
            const childElement = document.createElement('div');
            childElement.className = 'die-item';
            childElement.onclick = () => showDieDetails(child);

            const childName = child.Entry.Field.find(field => field.Attr === 'Name')?.Val ||
                DWARF_TAGS[child.Entry.Tag] || `Unknown Tag (${child.Entry.Tag})`;
            childElement.textContent = childName;
            childrenSection.appendChild(childElement);
        });

        detailsContent.appendChild(childrenSection);
    }

    dieDetails.appendChild(detailsContent);
    selectedDie = die;
} 