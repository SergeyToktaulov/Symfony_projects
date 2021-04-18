<?php
namespace App\Module;
use IvanUskov\ImageSpider\ImageSpider;

class getData
{
    private array $topic;



    public function getUrls()
    {
        $this->urls = ImageSpider::find($this->theme);
    }

    public function getArrayUrls(): array
    {
        $this->getUrls();
        for ($i=0; $i < 5; $i++)
        {
            $images[] = $this->urls[mt_rand(0, count($this->urls) - 1)];
        }
        return $images;
    }

    public function addTopic($theme)
    {
        $this->topic[] = [
            'header' => $this->theme = $theme,
            'images' => $this->getArrayUrls()
        ];
    }

    public function  getData()
    {
        return $this->topic;
    }
}
