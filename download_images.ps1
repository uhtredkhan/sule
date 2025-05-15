$urls = @(
    # E-commerce project image
    "https://picsum.photos/1600/900?random=1",
    # Task management project image
    "https://picsum.photos/1600/900?random=2",
    # Weather dashboard image
    "https://picsum.photos/1600/900?random=3",
    # Portfolio website image
    "https://picsum.photos/1600/900?random=4",
    # Blog platform image
    "https://picsum.photos/1600/900?random=5",
    # Restaurant website image
    "https://picsum.photos/1600/900?random=6"
)

$imageNames = @(
    "project1.jpg",
    "project2.jpg", 
    "project3.jpg",
    "project4.jpg",
    "project5.jpg",
    "project6.jpg"
)

for ($i = 0; $i -lt $urls.Count; $i++) {
    $url = $urls[$i]
    $outputFile = Join-Path "images" $imageNames[$i]
    
    Write-Host "Downloading $($imageNames[$i])..."
    Invoke-WebRequest -Uri $url -OutFile $outputFile
    Start-Sleep -Seconds 2  # Add a delay between downloads
}

Write-Host "All images downloaded successfully!" 