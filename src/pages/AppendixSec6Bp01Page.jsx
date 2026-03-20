import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec6Bp01Page() {
  return (
    <article className="doc-content">
      <h1>SEC06-BP01 — 취약점 관리 수행</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 알려진 취약점을 통한 공격으로 워크로드가 침해될 수 있습니다.</p>
      </div>
      <p>
        워크로드에서 소프트웨어 취약점, 잠재적 결함 및 의도치 않은 네트워크 노출을 지속적으로 스캔하는 솔루션을 구현합니다. 위험 평가 기준에 따라 취약점을 식별, 우선순위 지정 및 수정하는 프로세스와 절차를 수립합니다.
      </p>
      <h2>원하는 결과</h2>
      <ul>
        <li>소프트웨어 취약점, 잠재적 결함 및 의도치 않은 네트워크 노출에 대해 워크로드를 지속적으로 스캔하는 솔루션</li>
        <li>위험 평가 기준에 따라 취약점을 식별, 우선순위 지정 및 수정하는 프로세스와 절차 수립</li>
        <li>컴퓨팅 인스턴스에 대한 자동화된 패치 관리 구현</li>
        <li>CI/CD 파이프라인에서 소스 코드를 스캔하는 솔루션과 함께 소프트웨어 개발 수명 주기에 통합된 취약점 관리 프로그램</li>
      </ul>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>취약점 관리 프로그램 미운영</li>
        <li>심각도나 위험 회피를 고려하지 않고 시스템 패치 수행</li>
        <li>벤더가 제공한 수명 종료(EOL) 날짜가 지난 소프트웨어 사용</li>
        <li>보안 문제 분석 전에 코드를 프로덕션에 배포</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>알려진 취약점을 악용한 공격 표면 감소</li>
        <li>규정 준수 요구 사항 충족에 기여</li>
        <li>취약점의 조기 발견으로 침해 사고 발생 가능성 감소</li>
        <li>자동화된 스캔으로 보안팀의 수동 작업 부담 감소</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS 공동 책임 모델을 이해하고 워크로드에 대한 책임 범위를 파악합니다.</li>
        <li>Amazon Inspector를 구현하여 EC2 인스턴스, ECR 컨테이너 이미지, Lambda 함수에 대해 지속적으로 소프트웨어 취약점 및 의도치 않은 네트워크 접근을 스캔합니다.</li>
        <li>위험 평가 기준이 포함된 취약점 관리 프로세스를 수립합니다.</li>
        <li>AWS Systems Manager Patch Manager를 사용하여 Amazon EC2 인스턴스 전체의 패치 관리를 설정합니다.</li>
        <li>Amazon GuardDuty를 구성하여 EC2, EBS, S3의 악성코드를 탐지하고 경보를 생성합니다.</li>
        <li>CI/CD 파이프라인에 취약점 스캔을 통합하고 Amazon CodeGuru Security를 사용하여 Java 및 Python 애플리케이션에 대한 정적 코드 분석을 수행합니다.</li>
        <li>AWS Security Hub CSPM을 구성하여 보안 모니터링을 중앙화합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon Inspector — 소프트웨어 취약점 및 의도치 않은 네트워크 접근을 위한 AWS 워크로드 지속적 스캔</li>
        <li>AWS Systems Manager Patch Manager — Amazon EC2 인스턴스 전체 패치 관리</li>
        <li>AWS Security Hub CSPM — 클라우드 보안 태세 관리 서비스</li>
        <li>Amazon CodeGuru Security — Java 및 Python 애플리케이션 정적 코드 분석</li>
        <li>Amazon GuardDuty — EC2, EBS, S3의 악성코드 탐지 및 경보</li>
        <li>AWS CloudFormation — 인프라 코드 자동화</li>
      </ul>
      <PageNav />
    </article>
  );
}
