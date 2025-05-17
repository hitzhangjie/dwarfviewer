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
    0x4B: "DW_TAG_immutable_type",
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
    0x8C: "DW_AT_loclists_base",

    // go specific type attributes, see go/src/cmd/internal/dwarf/dwarf.go
    0x2900: "DW_AT_go_kind",
    0x2901: "DW_AT_go_key",
    0x2902: "DW_AT_go_elem",

    // attributes for DW_TAG_member of a struct type.
    // Nonzero value indicates that the struct field is an embedded field.
    0x2903: "DW_AT_go_embedded_field",
    0x2904: "DW_AT_go_runtime_type",

    // Attribute for DW_TAG_compile_unit
    0x2905: "DW_AT_go_package_name",
    // Attribute for DW_TAG_typedef_type, index of the dictionary entry describing the real type of this type shape
    0x2906: "DW_AT_go_dict_index",
    // Attribute for DW_TAG_variable, offset in the closure struct where this captured variable resides
    0x2907: "DW_AT_go_closure_offset",
    // params and locals; not emitted
    253: "DW_AT_internal_location"
};

// DWARF Operation Code mappings
const DWARF_OPS = {
    0x03: "DW_OP_addr",
    0x06: "DW_OP_deref",
    0x08: "DW_OP_const1u",
    0x09: "DW_OP_const1s",
    0x0A: "DW_OP_const2u",
    0x0B: "DW_OP_const2s",
    0x0C: "DW_OP_const4u",
    0x0D: "DW_OP_const4s",
    0x0E: "DW_OP_const8u",
    0x0F: "DW_OP_const8s",
    0x10: "DW_OP_constu",
    0x11: "DW_OP_consts",
    0x12: "DW_OP_dup",
    0x13: "DW_OP_drop",
    0x14: "DW_OP_over",
    0x15: "DW_OP_pick",
    0x16: "DW_OP_swap",
    0x17: "DW_OP_rot",
    0x18: "DW_OP_xderef",
    0x19: "DW_OP_abs",
    0x1A: "DW_OP_and",
    0x1B: "DW_OP_div",
    0x1C: "DW_OP_minus",
    0x1D: "DW_OP_mod",
    0x1E: "DW_OP_mul",
    0x1F: "DW_OP_neg",
    0x20: "DW_OP_not",
    0x21: "DW_OP_or",
    0x22: "DW_OP_plus",
    0x23: "DW_OP_plus_uconst",
    0x24: "DW_OP_shl",
    0x25: "DW_OP_shr",
    0x26: "DW_OP_shra",
    0x27: "DW_OP_xor",
    0x28: "DW_OP_skip",
    0x29: "DW_OP_bra",
    0x2A: "DW_OP_eq",
    0x2B: "DW_OP_ge",
    0x2C: "DW_OP_gt",
    0x2D: "DW_OP_le",
    0x2E: "DW_OP_lt",
    0x2F: "DW_OP_ne",
    0x30: "DW_OP_lit0",
    0x31: "DW_OP_lit1",
    0x32: "DW_OP_lit2",
    0x33: "DW_OP_lit3",
    0x34: "DW_OP_lit4",
    0x35: "DW_OP_lit5",
    0x36: "DW_OP_lit6",
    0x37: "DW_OP_lit7",
    0x38: "DW_OP_lit8",
    0x39: "DW_OP_lit9",
    0x3A: "DW_OP_lit10",
    0x3B: "DW_OP_lit11",
    0x3C: "DW_OP_lit12",
    0x3D: "DW_OP_lit13",
    0x3E: "DW_OP_lit14",
    0x3F: "DW_OP_lit15",
    0x40: "DW_OP_lit16",
    0x41: "DW_OP_lit17",
    0x42: "DW_OP_lit18",
    0x43: "DW_OP_lit19",
    0x44: "DW_OP_lit20",
    0x45: "DW_OP_lit21",
    0x46: "DW_OP_lit22",
    0x47: "DW_OP_lit23",
    0x48: "DW_OP_lit24",
    0x49: "DW_OP_lit25",
    0x4A: "DW_OP_lit26",
    0x4B: "DW_OP_lit27",
    0x4C: "DW_OP_lit28",
    0x4D: "DW_OP_lit29",
    0x4E: "DW_OP_lit30",
    0x4F: "DW_OP_lit31",
    0x50: "DW_OP_reg0",
    0x51: "DW_OP_reg1",
    0x52: "DW_OP_reg2",
    0x53: "DW_OP_reg3",
    0x54: "DW_OP_reg4",
    0x55: "DW_OP_reg5",
    0x56: "DW_OP_reg6",
    0x57: "DW_OP_reg7",
    0x58: "DW_OP_reg8",
    0x59: "DW_OP_reg9",
    0x5A: "DW_OP_reg10",
    0x5B: "DW_OP_reg11",
    0x5C: "DW_OP_reg12",
    0x5D: "DW_OP_reg13",
    0x5E: "DW_OP_reg14",
    0x5F: "DW_OP_reg15",
    0x60: "DW_OP_reg16",
    0x61: "DW_OP_reg17",
    0x62: "DW_OP_reg18",
    0x63: "DW_OP_reg19",
    0x64: "DW_OP_reg20",
    0x65: "DW_OP_reg21",
    0x66: "DW_OP_reg22",
    0x67: "DW_OP_reg23",
    0x68: "DW_OP_reg24",
    0x69: "DW_OP_reg25",
    0x6A: "DW_OP_reg26",
    0x6B: "DW_OP_reg27",
    0x6C: "DW_OP_reg28",
    0x6D: "DW_OP_reg29",
    0x6E: "DW_OP_reg30",
    0x6F: "DW_OP_reg31",
    0x70: "DW_OP_breg0",
    0x71: "DW_OP_breg1",
    0x72: "DW_OP_breg2",
    0x73: "DW_OP_breg3",
    0x74: "DW_OP_breg4",
    0x75: "DW_OP_breg5",
    0x76: "DW_OP_breg6",
    0x77: "DW_OP_breg7",
    0x78: "DW_OP_breg8",
    0x79: "DW_OP_breg9",
    0x7A: "DW_OP_breg10",
    0x7B: "DW_OP_breg11",
    0x7C: "DW_OP_breg12",
    0x7D: "DW_OP_breg13",
    0x7E: "DW_OP_breg14",
    0x7F: "DW_OP_breg15",
    0x80: "DW_OP_breg16",
    0x81: "DW_OP_breg17",
    0x82: "DW_OP_breg18",
    0x83: "DW_OP_breg19",
    0x84: "DW_OP_breg20",
    0x85: "DW_OP_breg21",
    0x86: "DW_OP_breg22",
    0x87: "DW_OP_breg23",
    0x88: "DW_OP_breg24",
    0x89: "DW_OP_breg25",
    0x8A: "DW_OP_breg26",
    0x8B: "DW_OP_breg27",
    0x8C: "DW_OP_breg28",
    0x8D: "DW_OP_breg29",
    0x8E: "DW_OP_breg30",
    0x8F: "DW_OP_breg31",
    0x90: "DW_OP_regx",
    0x91: "DW_OP_fbreg",
    0x92: "DW_OP_bregx",
    0x93: "DW_OP_piece",
    0x94: "DW_OP_deref_size",
    0x95: "DW_OP_xderef_size",
    0x96: "DW_OP_nop",
    0x97: "DW_OP_push_object_address",
    0x98: "DW_OP_call2",
    0x99: "DW_OP_call4",
    0x9A: "DW_OP_call_ref",
    0x9B: "DW_OP_form_tls_address",
    0x9C: "DW_OP_call_frame_cfa",
    0x9D: "DW_OP_bit_piece",
    0x9E: "DW_OP_implicit_value",
    0x9F: "DW_OP_stack_value",
    0xA0: "DW_OP_implicit_pointer",
    0xA1: "DW_OP_addrx",
    0xA2: "DW_OP_constx",
    0xA3: "DW_OP_entry_value",
    0xA4: "DW_OP_const_type",
    0xA5: "DW_OP_regval_type",
    0xA6: "DW_OP_deref_type",
    0xA7: "DW_OP_xderef_type",
    0xA8: "DW_OP_convert",
    0xA9: "DW_OP_reinterpret",
    0xE0: "DW_OP_lo_user",
    0xFF: "DW_OP_hi_user"
};

let dies = [];
let selectedDie = null;
let dieNavigationPath = []; // Track the navigation path

// Load DIEs when the page loads
window.onload = async function () {
    await loadDIEs();

    // Add event listener for Enter key on search input
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            searchDIEs();
        }
    });
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

// Function to parse DWARF location expression
function parseDWARFLocation(locationData) {
    // First try to decode base64 if it's a string
    let bytes;
    if (typeof locationData === 'string') {
        try {
            // Convert base64 to binary string
            const binaryStr = atob(locationData);
            // Convert binary string to byte array
            bytes = new Uint8Array(binaryStr.length);
            for (let i = 0; i < binaryStr.length; i++) {
                bytes[i] = binaryStr.charCodeAt(i);
            }
        } catch (e) {
            return "Invalid base64 location data";
        }
    } else if (Array.isArray(locationData)) {
        bytes = locationData;
    } else {
        return "Invalid location data";
    }

    let result = [];
    let i = 0;

    while (i < bytes.length) {
        const op = bytes[i++];
        const opName = DWARF_OPS[op] || `Unknown Op (${op})`;
        let opValue = '';

        // Handle operands for different operations
        switch (op) {
            case 0x03: // DW_OP_addr
                if (i + 8 <= bytes.length) {
                    const addr = new DataView(bytes.buffer, bytes.byteOffset + i).getBigUint64(0, true);
                    opValue = `0x${addr.toString(16)}`;
                    i += 8;
                }
                break;
            case 0x08: // DW_OP_const1u
            case 0x09: // DW_OP_const1s
                if (i < bytes.length) {
                    opValue = bytes[i++];
                }
                break;
            case 0x0A: // DW_OP_const2u
            case 0x0B: // DW_OP_const2s
                if (i + 2 <= bytes.length) {
                    const val = new DataView(bytes.buffer, bytes.byteOffset + i).getUint16(0, true);
                    opValue = val;
                    i += 2;
                }
                break;
            case 0x0C: // DW_OP_const4u
            case 0x0D: // DW_OP_const4s
                if (i + 4 <= bytes.length) {
                    const val = new DataView(bytes.buffer, bytes.byteOffset + i).getUint32(0, true);
                    opValue = val;
                    i += 4;
                }
                break;
            case 0x0E: // DW_OP_const8u
            case 0x0F: // DW_OP_const8s
                if (i + 8 <= bytes.length) {
                    const val = new DataView(bytes.buffer, bytes.byteOffset + i).getBigUint64(0, true);
                    opValue = val.toString();
                    i += 8;
                }
                break;
            case 0x10: // DW_OP_constu
            case 0x11: // DW_OP_consts
                // LEB128 encoding
                let value = 0;
                let shift = 0;
                while (i < bytes.length) {
                    const byte = bytes[i++];
                    value |= (byte & 0x7F) << shift;
                    if ((byte & 0x80) === 0) break;
                    shift += 7;
                }
                opValue = value;
                break;
            case 0x91: // DW_OP_fbreg
                // LEB128 encoding
                let offset = 0;
                let offsetShift = 0;
                while (i < bytes.length) {
                    const byte = bytes[i++];
                    offset |= (byte & 0x7F) << offsetShift;
                    if ((byte & 0x80) === 0) break;
                    offsetShift += 7;
                }
                opValue = offset;
                break;
            case 0x70: // DW_OP_breg0
            case 0x71: // DW_OP_breg1
            case 0x72: // DW_OP_breg2
            case 0x73: // DW_OP_breg3
            case 0x74: // DW_OP_breg4
            case 0x75: // DW_OP_breg5
            case 0x76: // DW_OP_breg6
            case 0x77: // DW_OP_breg7
            case 0x78: // DW_OP_breg8
            case 0x79: // DW_OP_breg9
            case 0x7A: // DW_OP_breg10
            case 0x7B: // DW_OP_breg11
            case 0x7C: // DW_OP_breg12
            case 0x7D: // DW_OP_breg13
            case 0x7E: // DW_OP_breg14
            case 0x7F: // DW_OP_breg15
            case 0x80: // DW_OP_breg16
            case 0x81: // DW_OP_breg17
            case 0x82: // DW_OP_breg18
            case 0x83: // DW_OP_breg19
            case 0x84: // DW_OP_breg20
            case 0x85: // DW_OP_breg21
            case 0x86: // DW_OP_breg22
            case 0x87: // DW_OP_breg23
            case 0x88: // DW_OP_breg24
            case 0x89: // DW_OP_breg25
            case 0x8A: // DW_OP_breg26
            case 0x8B: // DW_OP_breg27
            case 0x8C: // DW_OP_breg28
            case 0x8D: // DW_OP_breg29
            case 0x8E: // DW_OP_breg30
            case 0x8F: // DW_OP_breg31
                // LEB128 encoding for offset
                let bregOffset = 0;
                let bregShift = 0;
                while (i < bytes.length) {
                    const byte = bytes[i++];
                    bregOffset |= (byte & 0x7F) << bregShift;
                    if ((byte & 0x80) === 0) break;
                    bregShift += 7;
                }
                opValue = bregOffset;
                break;
        }

        result.push(opName + (opValue ? ` ${opValue}` : ''));
    }

    return result.join(' ');
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
    const tagElement = document.createElement('h3');
    tagElement.textContent = `Tag: ${DWARF_TAGS[die.Entry.Tag] || `Unknown Tag (${die.Entry.Tag})`}`;
    detailsContent.appendChild(tagElement);

    // Add fields section
    if (die.Entry.Field && die.Entry.Field.length > 0) {
        const fieldsSection = document.createElement('div');
        fieldsSection.className = 'fields-section';

        const fieldsHeader = document.createElement('h3');
        fieldsHeader.textContent = `Fields: (len=${die.Entry.Field.length})`;
        fieldsSection.appendChild(fieldsHeader);

        die.Entry.Field.forEach(field => {
            const attrElement = document.createElement('div');
            attrElement.className = 'attribute';
            const attrName = DWARF_ATTRS[field.Attr] || `Unknown Attr (${field.Attr})`;

            // Create a container for the attribute
            const attrContainer = document.createElement('div');
            attrContainer.className = 'attribute-container';

            // Create the attribute name and value
            const attrNameSpan = document.createElement('span');
            attrNameSpan.className = 'attribute-name';
            attrNameSpan.textContent = `${attrName}:`;

            const attrValueSpan = document.createElement('span');
            attrValueSpan.className = 'attribute-value';

            // Special handling for DW_AT_location
            if (field.Attr === 0x02) { // DW_AT_location
                attrValueSpan.textContent = parseDWARFLocation(field.Val);
            } else {
                attrValueSpan.textContent = field.Val;
            }

            attrContainer.appendChild(attrNameSpan);
            attrContainer.appendChild(attrValueSpan);

            let notExpandedIcon = '||▶';
            let hasExpandedIcon = '▼';

            // If this is a DW_AT_type attribute, add an expandable arrow
            if (field.Attr === 0x49) { // DW_AT_type
                const expandButton = document.createElement('span');
                expandButton.className = 'expand-button';
                expandButton.textContent = notExpandedIcon;
                expandButton.onclick = async (e) => {
                    e.stopPropagation();
                    const isExpanded = expandButton.textContent === hasExpandedIcon;

                    if (!isExpanded) {
                        // Fetch the referenced DIE
                        try {
                            const response = await fetch(`/api/dies/type/${field.Val}`);
                            const referencedDie = await response.json();

                            // Create a container for the referenced DIE
                            const referencedContainer = document.createElement('div');
                            referencedContainer.className = 'referenced-die';

                            // Show the referenced DIE details
                            showDieDetails(referencedDie, die);

                            // Update the expand button
                            expandButton.textContent = hasExpandedIcon;
                        } catch (error) {
                            console.error('Error fetching referenced DIE:', error);
                        }
                    } else {
                        // Collapse the referenced DIE
                        const referencedContainer = attrContainer.nextElementSibling;
                        if (referencedContainer && referencedContainer.className === 'referenced-die') {
                            referencedContainer.remove();
                        }
                        expandButton.textContent = '▶';
                    }
                };
                attrContainer.appendChild(expandButton);
            }

            attrElement.appendChild(attrContainer);
            fieldsSection.appendChild(attrElement);
        });

        detailsContent.appendChild(fieldsSection);
    }

    // Add offset
    const offsetElement = document.createElement('h3');
    offsetElement.textContent = `Offset: 0x${die.Entry.Offset.toString(16)}`;
    detailsContent.appendChild(offsetElement);

    // Add children section if there are children
    if (die.Children && die.Children.length > 0) {
        const childrenSection = document.createElement('div');
        childrenSection.className = 'children-section';

        const childrenHeader = document.createElement('h3');
        childrenHeader.textContent = `Children: (len=${die.Children.length})`;
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