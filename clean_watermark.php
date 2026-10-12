<?php
// MANJITCREATES SELF-DESTRUCTING WATERMARK REMOVER FOR GODADDY / CPANEL
header('Content-Type: application/json');

$input = isset($_REQUEST['key']) ? trim($_REQUEST['key']) : '';
$master_hash = 'bWFuaml0Y3JlYXRlc0A4NjY=';

if (base64_encode($input) !== $master_hash) {
    http_response_code(403);
    echo json_encode(['success' => false, 'message' => 'Invalid Key']);
    exit;
}

$files = ['index.html', 'corporate.html', 'mobile.html', 'presentation.html'];
$cleaned_count = 0;

foreach ($files as $file) {
    if (file_exists($file)) {
        $content = file_get_contents($file);
        $start = strpos($content, '<!-- ======================================================================== -->');
        if ($start !== false) {
            $end = strpos($content, '</script>', $start);
            if ($end !== false) {
                $end += strlen('</script>');
                $new_content = substr($content, 0, $start) . substr($content, $end);
                file_put_contents($file, $new_content);
                $cleaned_count++;
            }
        }
    }
}

// Self-destruct this script from server disk
@unlink(__FILE__);

echo json_encode([
    'success' => true,
    'cleaned_files' => $cleaned_count,
    'message' => 'Watermark code permanently purged from server HTML files and clean_watermark.php self-destructed.'
]);
?>
