<?php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Module\Hobbies;
class PageController extends AbstractController
{
    public function index()
    {
        $hobbies = new Hobbies();

        $theme = 'CS:GO';
        $hobbies->setTopic($theme);
        $hobbies->addData();

        $theme = 'Camping';
        $hobbies->setTopic($theme);
        $hobbies->addData();

        $theme = 'Dogs';
        $hobbies->setTopic($theme);
        $hobbies->addData();

        return $this->render('mypage.html.twig',[
            'hobbies' => $hobbies-> Hobbies()
        ]);
    }
}