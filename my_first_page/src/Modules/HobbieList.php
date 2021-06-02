<?php
namespace App\Modules;
use App\Modules\ImageProvider;
class HobbieList

{
    private array $topic;

    private ImageProvider $provider;

    public function addTopic($theme)
    {
        $provider = new ImageProvider();
        $this->topic[] = [
            'header' => $this->theme = $theme,
            'images' => $this->provider->getArrayUrls()
        ];
    }

    public function  getData()
    {
        return $this->topic;
    }
}
