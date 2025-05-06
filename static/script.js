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
    0x43: "DW_TAG_template_alias",
    0x44: "DW_TAG_coarray_type",
    0x45: "DW_TAG_generic_subrange",
    0x46: "DW_TAG_dynamic_type",
    0x47: "DW_TAG_atomic_type",
    0x48: "DW_TAG_call_site",
    0x49: "DW_TAG_call_site_parameter",
    0x4A: "DW_TAG_skeleton_unit",
    0x4B: "DW_TAG_immutable_type"
};

// DWARF Attribute mappings
const DWARF_ATTRS = {
    0x01: "DW_AT_sibling",
    0x02: "DW_AT_location",
    0x03: "DW_AT_name",
    0x09: "DW_AT_ordering",
    0x0B: "DW_AT_byte_size",
    0x0C: "DW_AT_bit_offset",
    0x0D: "DW_AT_bit_size",
    0x10: "DW_AT_stmt_list",
    0x11: "DW_AT_low_pc",
    0x12: "DW_AT_high_pc",
    0x13: "DW_AT_language",
    0x15: "DW_AT_discr",
    0x16: "DW_AT_discr_value",
    0x17: "DW_AT_visibility",
    0x18: "DW_AT_import",
    0x19: "DW_AT_string_length",
    0x1A: "DW_AT_common_ref",
    0x1B: "DW_AT_comp_dir",
    0x1C: "DW_AT_const_value",
    0x1D: "DW_AT_containing_type",
    0x1E: "DW_AT_default_value",
    0x20: "DW_AT_inline",
    0x21: "DW_AT_is_optional",
    0x22: "DW_AT_lower_bound",
    0x25: "DW_AT_producer",
    0x27: "DW_AT_prototyped",
    0x2A: "DW_AT_return_addr",
    0x2C: "DW_AT_start_scope",
    0x2E: "DW_AT_stride_size",
    0x2F: "DW_AT_upper_bound",
    0x31: "DW_AT_abstract_origin",
    0x32: "DW_AT_accessibility",
    0x33: "DW_AT_addr_class",
    0x34: "DW_AT_artificial",
    0x35: "DW_AT_base_types",
    0x36: "DW_AT_calling",
    0x37: "DW_AT_count",
    0x38: "DW_AT_data_member_loc",
    0x39: "DW_AT_decl_column",
    0x3A: "DW_AT_decl_file",
    0x3B: "DW_AT_decl_line",
    0x3C: "DW_AT_declaration",
    0x3D: "DW_AT_discr_list",
    0x3E: "DW_AT_encoding",
    0x3F: "DW_AT_external",
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
    0x4A: "DW_AT_use_location",
    0x4B: "DW_AT_var_param",
    0x4C: "DW_AT_virtuality",
    0x4D: "DW_AT_vtable_elem_loc",
    0x4E: "DW_AT_allocated",
    0x4F: "DW_AT_associated",
    0x50: "DW_AT_data_location",
    0x51: "DW_AT_stride",
    0x52: "DW_AT_entrypc",
    0x53: "DW_AT_use_UTF8",
    0x54: "DW_AT_extension",
    0x55: "DW_AT_ranges",
    0x56: "DW_AT_trampoline",
    0x57: "DW_AT_call_column",
    0x58: "DW_AT_call_file",
    0x59: "DW_AT_call_line",
    0x5A: "DW_AT_description",
    0x5B: "DW_AT_binary_scale",
    0x5C: "DW_AT_decimal_scale",
    0x5D: "DW_AT_small",
    0x5E: "DW_AT_decimal_sign",
    0x5F: "DW_AT_digit_count",
    0x60: "DW_AT_picture_string",
    0x61: "DW_AT_mutable",
    0x62: "DW_AT_threads_scaled",
    0x63: "DW_AT_explicit",
    0x64: "DW_AT_object_pointer",
    0x65: "DW_AT_endianity",
    0x66: "DW_AT_elemental",
    0x67: "DW_AT_pure",
    0x68: "DW_AT_recursive",
    0x69: "DW_AT_signature",
    0x6A: "DW_AT_main_subprogram",
    0x6B: "DW_AT_data_bit_offset",
    0x6C: "DW_AT_const_expr",
    0x6D: "DW_AT_enum_class",
    0x6E: "DW_AT_linkage_name",
    0x6F: "DW_AT_string_length_bit_size",
    0x70: "DW_AT_string_length_byte_size",
    0x71: "DW_AT_rank",
    0x72: "DW_AT_str_offsets_base",
    0x73: "DW_AT_addr_base",
    0x74: "DW_AT_rnglists_base",
    0x76: "DW_AT_dwo_name",
    0x77: "DW_AT_reference",
    0x78: "DW_AT_rvalue_reference",
    0x79: "DW_AT_macros",
    0x7A: "DW_AT_call_all_calls",
    0x7B: "DW_AT_call_all_source_calls",
    0x7C: "DW_AT_call_all_tail_calls",
    0x7D: "DW_AT_call_return_pc",
    0x7E: "DW_AT_call_value",
    0x7F: "DW_AT_call_origin",
    0x80: "DW_AT_call_parameter",
    0x81: "DW_AT_call_pc",
    0x82: "DW_AT_call_tail_call",
    0x83: "DW_AT_call_target",
    0x84: "DW_AT_call_target_clobbered",
    0x85: "DW_AT_call_data_location",
    0x86: "DW_AT_call_data_value",
    0x87: "DW_AT_noreturn",
    0x88: "DW_AT_alignment",
    0x89: "DW_AT_export_symbols",
    0x8A: "DW_AT_deleted",
    0x8B: "DW_AT_defaulted",
    0x8C: "DW_AT_loclists_base"
};

let dies = [];
let selectedDie = null;
let dieNavigationPath = []; // Track the navigation path

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
        const nameAttr = die.Entry.Field.find(field => field.Attr === 0x03);
        const tagName = DWARF_TAGS[die.Entry.Tag] || `Unknown Tag (${die.Entry.Tag})`;

        // Create display text combining tag and name
        let displayText = tagName;
        if (nameAttr) {
            displayText += `: ${nameAttr.Val}`;
        }

        dieElement.textContent = displayText;
        dieList.appendChild(dieElement);
    });
}

// Show DIE details
function showDieDetails(die, parentDie = null) {
    const dieDetails = document.getElementById('dieDetails');
    const dieContent = document.getElementById('dieContent');
    const dieNavigation = document.getElementById('dieNavigation');

    // Update navigation path
    if (parentDie) {
        // If we're navigating to a child DIE
        const existingIndex = dieNavigationPath.findIndex(d => d === die);
        if (existingIndex !== -1) {
            // If we're going back to a previously visited DIE
            dieNavigationPath = dieNavigationPath.slice(0, existingIndex + 1);
        } else {
            // Add new DIE to the path
            dieNavigationPath.push(die);
        }
    } else {
        // If we're starting fresh or clicking from the main list
        dieNavigationPath = [die];
    }

    // Update navigation breadcrumbs
    dieNavigation.innerHTML = '';
    dieNavigationPath.forEach((pathDie, index) => {
        const breadcrumb = document.createElement('span');
        breadcrumb.className = 'navigation-item';

        // Find the name attribute if it exists
        const nameAttr = pathDie.Entry.Field.find(field => field.Attr === 0x03);
        const tagName = DWARF_TAGS[pathDie.Entry.Tag] || `Unknown Tag (${pathDie.Entry.Tag})`;

        // Create display text combining tag and name
        let displayText = tagName;
        if (nameAttr) {
            displayText += `: ${nameAttr.Val}`;
        }

        breadcrumb.textContent = displayText;

        // Add click handler for navigation
        if (index < dieNavigationPath.length - 1) {
            breadcrumb.className += ' clickable';
            breadcrumb.onclick = () => {
                // Get the parent DIE for the clicked node
                const parentDie = index > 0 ? dieNavigationPath[index - 1] : null;
                // Update the navigation path
                dieNavigationPath = dieNavigationPath.slice(0, index + 1);
                // Show the DIE details with its parent
                showDieDetails(pathDie, parentDie);
            };
        }

        dieNavigation.appendChild(breadcrumb);

        // Add separator if not the last item
        if (index < dieNavigationPath.length - 1) {
            const separator = document.createElement('span');
            separator.className = 'navigation-separator';
            separator.textContent = ' > ';
            dieNavigation.appendChild(separator);
        }
    });

    // Clear and update content
    dieContent.innerHTML = '';

    // Remove selected class from all items
    document.querySelectorAll('.die-item').forEach(item => {
        item.classList.remove('selected');
    });

    // Add selected class to clicked item
    const selectedItem = Array.from(document.querySelectorAll('.die-item')).find(item => {
        let attr = die.Entry.Field.find(field => field.Attr === 0x03);
        return item.textContent === (attr?.Val ? `${DWARF_TAGS[die.Entry.Tag]}: ${attr.Val}` : DWARF_TAGS[die.Entry.Tag]);
    });
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
            childElement.onclick = () => showDieDetails(child, die);

            const childNameAttr = child.Entry.Field.find(field => field.Attr === 0x03);
            const childTagName = DWARF_TAGS[child.Entry.Tag] || `Unknown Tag (${child.Entry.Tag})`;

            let displayText = childTagName;
            if (childNameAttr) {
                displayText += `: ${childNameAttr.Val}`;
            }

            childElement.textContent = displayText;
            childrenSection.appendChild(childElement);
        });

        detailsContent.appendChild(childrenSection);
    }

    dieContent.appendChild(detailsContent);
    selectedDie = die;
} 