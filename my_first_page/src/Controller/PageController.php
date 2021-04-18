<?php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Module\getData;
class PageController extends AbstractController
{
    public function index()
    {
        $hobbies = new getData();

        $theme = 'CS:GO';
        $hobbies->addTopic($theme);

        $theme = 'Camping';
        $hobbies->addTopic($theme);

        $theme = 'Dogs';
        $hobbies->addTopic($theme);

        return $this->render('mypage.html.twig',[
            'hobbies' => $hobbies-> getData()
        ]);
    }
}