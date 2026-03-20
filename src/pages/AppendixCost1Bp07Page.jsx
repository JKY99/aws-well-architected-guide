import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost1Bp07Page() {
  return (
    <article className="doc-content">
      <h1>COST01-BP07 — 새로운 서비스 릴리스 최신 정보 유지</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>AWS가 새로운 서비스와 기능을 지속적으로 출시함에 따라, 이러한 새로운 서비스가 기존 워크로드의 비용을 어떻게 줄일 수 있는지 정기적으로 검토합니다.</p>
      <h2>원하는 결과</h2>
      <p>AWS의 새로운 서비스와 기능을 활용하여 기존 워크로드의 비용 효율성을 지속적으로 개선합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>새로운 AWS 서비스와 기능에 대한 모니터링 없이 기존 아키텍처를 유지합니다.</li>
        <li>비용 절감 기회가 있는 신규 서비스를 무시합니다.</li>
        <li>새로운 인스턴스 유형이나 스토리지 클래스 출시를 활용하지 않습니다.</li>
        <li>기술 부채가 누적되어 장기적으로 더 높은 비용이 발생합니다.</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>최신 AWS 서비스를 활용하여 비용을 절감합니다.</li>
        <li>최신 기술로 워크로드 효율성이 향상됩니다.</li>
        <li>기술 부채가 줄어듭니다.</li>
        <li>경쟁 우위를 유지할 수 있습니다.</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS What's New 구독: AWS 새 서비스 발표를 정기적으로 확인합니다.</li>
        <li>AWS re:Invent 참여: 연간 컨퍼런스에서 새로운 서비스와 비용 최적화 팁을 학습합니다.</li>
        <li>정기 아키텍처 리뷰: 새로운 서비스가 현재 아키텍처를 어떻게 개선할 수 있는지 분기별로 검토합니다.</li>
        <li>파일럿 프로그램 참여: AWS 미리보기나 베타 서비스를 통해 새로운 기능을 먼저 경험합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS What's New</li>
        <li>AWS Blog</li>
        <li>AWS re:Invent</li>
        <li>AWS Trusted Advisor</li>
      </ul>
      <PageNav />
    </article>
  );
}
